const express = require("express");
const jwt = require("jsonwebtoken");

const app = express();
app.use(express.json());

const SECRET = "mysecret";

app.post("/login", (req, res) => {

  const { username } = req.body;

  const token = jwt.sign({ username }, SECRET, { expiresIn: "1h" });

  res.json({ token });
});

app.get("/verify", (req,res)=>{
  res.json({status:"ok"})
})

app.listen(3001, () => {
  console.log("auth-service running");
});