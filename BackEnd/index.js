import express from "express";
import Connection from "./database/db.js";
import Routes from "./routes/route.js";
import cors from "cors";
import bodyParser from "body-parser";
const app = express();

app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

app.use("/", Routes);

const PORT = 7777;
Connection();
app.listen(PORT, () =>
  console.log(`Server is running succesfully on PORT ${PORT}`)
);
