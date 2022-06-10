import express from "express";
import { EmailAssignment } from "../../app.js";
import { createEmailSchema } from "../validators/email.validator.js";
import { emailStringManipulation } from "../../utils/email.manipulation.js";

const emailRouter = express.Router();

emailRouter.get('/', (req, res, next) => {
    EmailAssignment.findAll()
        .then((result) => {
            emailStringManipulation(result);
            res.send(result);
        })
})

emailRouter.post('/', createEmailSchema, (req, res) => {
    EmailAssignment.create(req.body)
        .then(() => {
            res.status(200).json({
                message: 'Email Added Successfully'
            });
        }).catch(() => {
            res.status(500).json({
                message: 'Incorrect email format'
            })
        });
});

export default emailRouter;
