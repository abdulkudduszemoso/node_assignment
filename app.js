import express from "express";
import bodyParser from 'body-parser';
import { errorHandler, notFoundError, notFoundErrorHandler } from "./utils/error-handler.js";
import { connection } from "./utils/db.connection.js";
import { Email } from "./src/models/email.model.js";
import emailRouter from "./src/controllers/email.controller.js";

const app = express();

export const EmailAssignment = Email(connection);

connection.sync({ alter: true });

// Middlewares
app.use(errorHandler);
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

// Routes
app.use('/emails', emailRouter);

//Error Handler
app.use(notFoundError);
app.use(notFoundErrorHandler);

export default app;