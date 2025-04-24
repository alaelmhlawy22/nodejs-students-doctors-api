const express = require("express");

const app = express();


let doctors = [];

app.get("/add-doctor", (req, res) => {
  const { name, age, phone } = req.query;

  if (!name || !age || !phone) {
    return res.status(400).send("Please provide name, age, and phone for the doctor.");
  }

  const newDoctor = {
    name,
    age: Number(age),
    phone
  };

  doctors.push(newDoctor);

  res.send({
    message: "Doctor added successfully!",
    doctor: newDoctor,
    allDoctors: doctors
  });
});


app.listen(3000, () =>{
  console.log("I am listening in port 3000");
});

