import { Request, Response } from 'express';
import nodemailer from 'nodemailer';

export const sendContactEmail = async (req: Request, res: Response) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ message: 'All fields are required.' });
  }

  // Configure your email transport
  const transporter = nodemailer.createTransport({
    service: 'gmail', // or another email provider
    auth: {
      user: process.env.CONTACT_EMAIL_USER, // set in .env
      pass: process.env.CONTACT_EMAIL_PASS, // set in .env
    },
  });

  try {
    await transporter.sendMail({
      from: email,
      to: process.env.CONTACT_EMAIL_TO, // set in .env
      subject: `Contact Form Submission from ${name}`,
      text: message,
    });
    res.status(200).json({ message: 'Message sent successfully!' });
  } catch (error) {
    res.status(500).json({ message: 'Failed to send message.' });
  }
};