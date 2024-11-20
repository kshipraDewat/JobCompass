const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const fs = require("fs");
const app = express();

app.use(cors());
app.use(bodyParser.json());

const DATA_FILE = "./jobs.json";

// Route to save job data
app.post("/api/jobs", (req, res) => {
  const jobData = req.body;

  fs.readFile(DATA_FILE, "utf8", (err, data) => {
    if (err) {
      if (err.code === "ENOENT") {
        // File does not exist, create it
        fs.writeFile(DATA_FILE, JSON.stringify([jobData], null, 2), (writeErr) => {
          if (writeErr) {
            res.status(500).send("Error saving job data");
          } else {
            res.status(201).send("Job added successfully!");
          }
        });
      } else {
        res.status(500).send("Error reading job data");
      }
    } else {
      // Append to existing data
      const jobs = JSON.parse(data);
      jobs.push(jobData);
      fs.writeFile(DATA_FILE, JSON.stringify(jobs, null, 2), (writeErr) => {
        if (writeErr) {
          res.status(500).send("Error saving job data");
        } else {
          res.status(201).send("Job added successfully!");
        }
      });
    }
  });
});

// Route to get job data
app.get("/api/jobs", (req, res) => {
  fs.readFile(DATA_FILE, "utf8", (err, data) => {
    if (err) {
      if (err.code === "ENOENT") {
        res.json([]);
      } else {
        res.status(500).send("Error reading job data");
      }
    } else {
      res.json(JSON.parse(data));
    }
  });
});

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
