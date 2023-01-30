import express from "express";
import rides from "./routes/rides";
const app = express();
const port = 3000;

app.use(express.json());
app.use('/app',rides);

app.listen(port, () => {
    console.log(`app listening on port ${port}`)
  });