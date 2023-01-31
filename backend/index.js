import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import multer from "multer";
import bodyParser from "body-parser";
import path from "path";
import router from "./router/routes.js";

const app = express();

mongoose.connect("mongodb://localhost:27017/Rental_db", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const db = mongoose.connection;
db.on("error", (error) => console.log(error));
db.once("open", () => console.log("Databased Connected..."));

const fileStorage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "images/");
  },
  filename: (req, file, cb) => {
    cb(null, new Date().getTime() + "-" + file.originalname);
  },
});

const fileFilter = (req, file, cb) => {
  if (
    file.mimetype === "image/png" ||
    file.mimetype === "image/jpg" ||
    file.mimetype === "image/jepg"
  ) {
    cb(null, true);
  } else {
    cb(null, false);
  }
};

app.use(
  multer({ storage: fileStorage, filefilter: fileFilter }).single("image")
);
app.use(bodyParser.json());
app.use(cors());
app.use("/images", express.static(path.join("images")));

app.use(express.json());
app.use(router);
app.listen(5000, console.log("Server Up and Running..."));
