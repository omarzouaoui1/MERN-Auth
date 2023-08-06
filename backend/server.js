import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";

import userRoutes from './routes/userRouts.js';
import { errorHandler, notFound } from "./middleware/erroeMiddleware.js";
import connectDB from "./config/db.js";



dotenv.config();
const app = express();
const port = process.env.PORT || 5000;

connectDB();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use('/api/users', userRoutes);

app.get('/', (req, res) => res.send('Server is ready'));

app.use(notFound);
app.use(errorHandler);

app.listen(port, () => console.log(`Server started on port ${port}`));

