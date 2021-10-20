const express = require("express");
const cors = require("cors");
const axios = require("axios");

const app = express();
app.use(cors());

app.use(express.json());

app.get("/users", async (req, res) => {
  try {
    const result = await axios.get(
      "https://jsonplaceholder.typicode.com/users"
    );
    res.status(200).send(result.data);
  } catch (error) {
    res.status(500).send(error);
  }
});

app.listen(8080, () => {
  console.log("listening on port 8080");
});
