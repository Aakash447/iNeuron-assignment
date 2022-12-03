const express = require("express");
const mongoose = require("mongoose");
const app = express();
const port = 3008;
const authRouter = require("./routes/AuthRoutes");
var cors = require("cors");
app.use(express.json());
mongoose.connect(
  "mongodb+srv://adrixus:adrixus@cluster0.1sm9asg.mongodb.net/test",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  (err, success) => {
    if (success) {
      console.log("database connected");
    }
    if (err) {
      console.log("err:", err);
    }
  }
);
app.use(cors());

app.use("/api", authRouter);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
