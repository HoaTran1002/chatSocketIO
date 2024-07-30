import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import dotnet from "dotenv";
dotnet.config();
const app = express();
const port = process.env.PORT || 4000;
const atlas_uri = process.env.ATLAS_URI;
app.use(express.json());
app.use(cors());
app.listen(port, (req, res) => {
  console.log(`app listen on port ${port}`);
});
mongoose
  .connect(atlas_uri, {
    useNewUrlParser: true,
    useUnifieldTopology: true,
  })
  .then(() => {
    console.log("connect to mongodb success");
  })
  .catch((error) => {
    console.log("falied connect to mongodb:", error);
  });
