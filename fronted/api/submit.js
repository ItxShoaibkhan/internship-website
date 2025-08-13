import mysql from "mysql2/promise";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { name, email } = req.body;

    try {
      // Create a new connection each time (serverless best practice)
      const connection = await mysql.createConnection({
        host: process.env.DB_HOST,     // e.g., 'your-db-host.com'
        user: process.env.DB_USER,     // e.g., 'root'
        password: process.env.DB_PASS, // your password
        database: process.env.DB_NAME  // your database name
      });

      // Save form data
      await connection.execute(
        "INSERT INTO contacts (name, email) VALUES (?, ?)",
        [name, email]
      );

      await connection.end();

      res.status(200).json({ message: "Data saved successfully" });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Error saving data", error: error.message });
    }
  } else {
    res.status(405).json({ message: "Method Not Allowed" });
  }
}
