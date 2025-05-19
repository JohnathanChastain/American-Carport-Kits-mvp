import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import apiRoutes from './routes/api';
import contactRoutes from './routes/contactRoutes'
import path from 'path';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

const allowedOrigin = 'https://your-frontend-domain.com'; // Replace with your real frontend domain

app.use(cors({
  origin: allowedOrigin,
}));

app.use(express.json());
app.use('/api/contact', contactRoutes);
app.use('/api', apiRoutes);

// Serve static files from the React app
app.use(express.static(path.join(__dirname, '../../client/build')));

// For any route not handled by your API, serve index.html
app.get('*', (_req, res) => {
  res.sendFile(path.join(__dirname, '../../client/build', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});