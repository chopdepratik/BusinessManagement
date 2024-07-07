import jwt from "jsonwebtoken";
import Emp from "../models/employee.models.js";

export const createToken = (empId, empEmail) => {
    const token = jwt.sign(
        {
            empId,
            empEmail,
        },
        process.env.SECRET,
        {
            expiresIn: "5d",
        }
    );

    return token;
};

export const isAuthenticated = (req, res, next) => {
    try {
        const token = req.headers.authorization?.split(" ")[1];

        if (!token) {
            return res.status(401).json({
                success: false,
                isLogin: false,
                message: "Missing Token",
            });
        }

        jwt.verify(token, process.env.SECRET, async (err, user) => {
            if (err) {
                return res.status(400).json({
                    success: false,
                    isLogin: false,
                    message: err.message,
                });
            }

            req.user = await Emp.findById(user.empId);
            next();
        });
    } catch (err) {
        res.status(500).json({
            success: false,
            message: err.message,
        });
    }
};
