import { DataTypes } from "sequelize"

export const Email = (sequelize) => {
    return sequelize.define('email',{
        email: {
            type: DataTypes.STRING,
            validate: {
                isEmail: true
            }
        }
    });
}