import express from "express";
import data from './data/mock.json' assert { type: "json" };

const app = express();

const PORT = 3000;

app.get('/', (req, res)=>{
  res.send('Welcome. You are in the root of ExpressJS server.<br/>Use http://localhost:3000/list/ to list some mock data');
  //console.log(req);
})

app.get('/list', (req, res)=>{
  res.json(data);
})

app.listen(PORT, ()=>{
  console.log(`The server is running on port ${PORT}`);
  //console.log(data);
})
