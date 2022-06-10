import Joi from "joi"
import { ValidationHandler } from "../../utils/validation-handler.js";

export const createEmailSchema = (req, res, next) => {
    const schema = Joi.object({
        email: Joi.string().required()
    });

    ValidationHandler(req, next, schema);
} 