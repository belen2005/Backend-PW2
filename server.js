import express from "express";
import cors from "cors";

const app = express();
const port = process.env.PORT || 3000;
const corsOptions = {
  origin: "https://hobby-pw2.netlify.app",
};

app.use(cors(corsOptions));

app.get("/", (req, res) => {
  res.send("API HOBBIES");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
