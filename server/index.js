const express = require("express");
const cors = require("cors");
const res = require("express/lib/response");
const { strictEqual } = require("assert");
const { send } = require("process");

const app = express();


app.use(cors());

app.use(express.json()); // When we want to be able to accept JSON.

app.get("/api/compliment", (req, res) => {
  const compliments = ["Gee, you're a smart cookie!",
					 "Cool shirt!",
					 "Your Javascript skills are stellar.",
  ];
  // choose random compliment
  let randomIndex = Math.floor(Math.random() * compliments.length);
  let randomCompliment = compliments[randomIndex];

  res.status(200).send(randomCompliment);
  
});

app.get("/api/fortune",(req,res)=>{
  const fortunes = ["A beautiful, smart, and loving person will be coming into your life.",
"A dubious friend may be an enemy in camouflage.","A faithful friend is a strong defense.",
"A fresh start will put you on your way.","A friend asks only for your time not your money."]

let randomFortuneIndex = Math.floor(Math.random() * fortunes.length)
let randomFortune = fortunes[randomFortuneIndex]

res.status(200).send(randomFortune)

})
const advice = []

app.get("/api/advice",(req,res)=>{
let randomAdviceIndex = Math.floor(Math.random() * advice.length)
let randomAdvice = advice[randomAdviceIndex]
let response = {
  advice: randomAdvice,
  id: randomAdviceIndex
}

res.status(200).send(response)

})






app.post("/api/update", (req,res)=>{
    const{str} = req.body
    advice.push(str)
    
  res.sendStatus(200)
  

})


app.delete("/api/str/:id", (req,res) => {
  const {id} = req.params

advice.splice(1,id)


})

app.put("")

app.listen(4000, () => console.log("Server running on 4000"));
