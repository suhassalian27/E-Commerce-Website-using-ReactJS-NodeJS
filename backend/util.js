import jwt from "jsonwebtoken";
import config from "./config";

const getToken = (user) => {
    return jwt.sign(
        {
            _id: user._id,
            name: user.email,
            email: user.email,
            isAdmin: user.isAdmin
        },
        config.JWT_SECRET,
        {
            expiresIn: "48h"
        }
    );
};
export { getToken };
