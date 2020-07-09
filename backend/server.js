import express from "express";
import data from "./data";
import config from "./config";
import dotenv from "dotenv";
import mongoose from "mongoose";
import bodyparser from "body-parser";
import userRoute from "./routes/userRoute";

dotenv.config();

const mongodbURL = config.MONGODB_URL;
mongoose
    .connect(mongodbURL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true
    })
    .catch(error => console.log(error.reason));

const app = express();
app.use(bodyparser.json())
app.use("/api/users", userRoute);
app.get("/api/products/:id", (req, res) => {
    const productId = req.params.id;
    const product = data.products.find(x => x._id === productId);
    if (product) res.send(product);
    else res.status(404).send({ msg: "Product Not Found." });
});

app.get("/api/products", (req, res) => {
    res.send(data.products);
});

app.listen(5000, () =>
    console.log(
        "************************************************** \n The Server has started at : http://localhost:5000"
    )
);
