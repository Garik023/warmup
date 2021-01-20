// Imports
import express from "express";
import path from "path";
import { fileURLToPath } from "url";

const app = express();
const port = 5000;
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Static Files
app.use(express.static("public"));
// Specific folder example
app.use("/css", express.static(__dirname + "public/css"));
app.use("/js", express.static(__dirname + "public/js"));
app.use("/img", express.static(__dirname + "public/images"));

app.get("", (req, res) => {
  res.sendFile(__dirname + "/views/index.html");
});

app.get("/d3", (req, res) => {
  res.sendFile(__dirname + "/views/d3.html");
});

app.listen(port, () => console.info(`App listening on port ${port}`));
