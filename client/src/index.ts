import express from "express";
import dotenv from 'dotenv';
import { routes } from './routes/index.js';

dotenv.config()

const app = express();
const port = process.env.PORT || 2000;

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});

app.use('/', routes);
