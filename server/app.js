import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import fs from "fs";
import path from "path";
import { fileURLToPath } from 'url';
const app = express();
const _filename = fileURLToPath(import.meta.url);
const _dirname = path.dirname(_filename); 

const buildPath = path.join(_dirname, "dist");

// checks if buildPath exits
if(fs.existsSync(buildPath)) {
    app.use(express.static(buildPath))
}

dotenv.config();
//const app = express();
const PORT = process.env.PORT || 8080;

// ````````` we need not switch on the cors extension in the browser if this is added to the code: 
// app.use(cors());
let allowedDomains = ["ishwari.online"];
const domainOption = {
    origin: allowedDomains,
}
app.use(cors(domainOption));

app.use(express.json());

app.get(/^\/(?!api).*/,(req,res)=> {
    res.sendFile(path.join(buildPath, "index.html"));
});


//`````````````````````````````

const messages = [];

app.post("/messages", (req, res) => {
  try {
    const { name, email, message } = req.body;
    if (!name || !email || !message) {
      return res.status(400).json({ msg: "All fields are required" });
    }
    messages.push({ name, email, message });
    res.status(201).json({ msg: "Message saved successfully!" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ msg: "Internal Server Error" });
  }
});

app.get("/messages", (req, res) => {
  try {
    res.status(200).json({ messages });
  } catch (error) {
    console.error(error);
    res.status(500).json({ msg: "Internal Server Error" });
  }
});

app.delete("/deleteMessages", (req, res) => {
  try {
    messages.length = 0; 
    res.status(200).json({ msg: "All messages deleted successfully." });
  } catch (error) {
    console.error(error);
    res.status(500).json({ msg: "Internal Server Error" });
  }
});

// General 404(non-API)
app.use((req, res) => {
  res.status(404).json({ msg: "404- Not Found." });
});

// Error handler
app.use((err,req,res,next)=> {
    console.log(err.stack);
    res.status(500).send("500- Internal Server Error")
});

app.listen(PORT, () => {
  console.log(`Server is up and running at ${PORT}`);
});
