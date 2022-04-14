const express = require('express');
const PORT=9000;
const app=express();
app.use(express.json());


app.post('/user', (req, res) => {
    
    data = `<h1>Name = ${req.body.name}<br>
    City = ${req.body.city}<br>
    Mobile No = ${req.body.mobile}<br>
    Email=${req.body.email} </h1>`;

    res.send(data);
});

app.listen(PORT,()=>{
    console.log(`The server is runnin on ${PORT} `);
});