// This is your server file :)
import express from "express";
import dotenv from "dotenv";
import pageRouter from "./routes/page.routes";
import path from "path";
dotenv.config();

const app = express();

app.set("view engine", "EJS");
app.set("views", path.join(__dirname, "../src/views"));

app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: true }));

app.use("/", pageRouter);

const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
