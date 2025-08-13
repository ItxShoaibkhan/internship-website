import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import multer from "multer";
import path from "path";
import fs from "fs";
import { fileURLToPath } from "url";
import connection from "./db.js"

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());

// Serve static files
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// -------- /api/contact (simple form) --------
app.post("/api/contact", (req, res) => {
  const { name, company, email, phone, message, captcha } = req.body;

  const sql = `
    INSERT INTO contact_form (name, company, email, phone, message, captcha)
    VALUES (?, ?, ?, ?, ?, ?)
  `;
  db.query(sql, [name, company, email, phone, message, captcha], (err, result) => {
    if (err) {
      console.error("Insert error:", err);
      return res.status(500).json({ message: "Database error" });
    }
    res.status(200).json({ message: "Message saved successfully!" });
  });
});

// -------- /api/apply (application form with file upload) --------
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    const uploadPath = path.join(__dirname, 'uploads');
    if (!fs.existsSync(uploadPath)) fs.mkdirSync(uploadPath);
    cb(null, uploadPath);
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + '_' + file.originalname);
  }
});
const upload = multer({ storage });

app.post("/api/apply", upload.single("resume"), (req, res) => {
  const { fullName, email, country, position } = req.body;
  const resume = req.file ? req.file.filename : null;

  if (!fullName || !email || !country || !position || !resume) {
    return res.status(400).json({ message: "All fields are required." });
  }

  const sql = `
    INSERT INTO applications (fullName, email, country, position, resume)
    VALUES (?, ?, ?, ?, ?)
  `;
  db.query(sql, [fullName, email, country, position, resume], (err, result) => {
    if (err) {
      console.error("Insert error:", err);
      return res.status(500).json({ message: "Database error" });
    }
    res.status(200).json({ message: "Application submitted successfully!" });
  });
});

// -------- Start server --------
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`✅ Server running on port ${PORT}`));
