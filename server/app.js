import express from 'express';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import { connection } from './database/dbConnection.js';
import { errorMiddleware } from './middlewares/error.js';
import userRouter from './routes/userRouter.js';
import { removeUnverifiedAccounts } from './automation/removeUnverifiedAccounts.js';


dotenv.config({ path: './config.env' });

export const app = express();

app.use(cors({
    origin: [process.env.FRONTEND_URL],
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    credentials: true,
}))


app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api/v1/user', userRouter);

removeUnverifiedAccounts(); // Assuming this function is imported from the automation module

connection();


app.use(errorMiddleware);
