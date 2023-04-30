const express = require('express');
const destinations = require('./data/destinations.json');
const app = express();
const port = 5000;
const cors = require('cors');

app.use(cors());

app.get('/',(req,res)=>{
    res.send('hello World');
});
app.get('/destinations',(req,res)=>{
    res.send(destinations);
});
app.get('/destinations/:id',(req,res)=>{
    const id = req.params.id;
    const result = destinations.find(d=>d.id===id);
    res.send(result || {});
})

app.listen(port,()=>{
    console.log('server on');
})