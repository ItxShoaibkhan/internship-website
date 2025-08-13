import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://htexhhwooenfejzbmtog.supabase.co';
const supabaseKey = process.env.SUPABASE_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }

  const { name, company, email, phone, message, captcha } = req.body;

  try {
    const { data, error } = await supabase
      .from('contact_form')
      .insert([{ name, company, email, phone, message, captcha }]);

    if (error) throw error;

    res.status(200).json({ message: 'Message saved successfully!' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Database error' });
  }
}
