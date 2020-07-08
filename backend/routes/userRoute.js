import express from "express";
import User from "../models/usermodel";

const router = express.Router();

router.get("/createadmin", async (req, res) => {
    try {
        const user = new User({
            name: "Suhas",
            email: "suhas@gmail.com",
            password: "12345",
            isAdmin: true
        });
        const newUser = await user.save();
        res.send(newUser);
    } catch (error) {
        res.send({ msg: error.message });
    }
});

export default router;
