const express = require ('express');
const port = 3000;

const app = express();


app.listen(port,()=>{
    console.log(`server running on port: ${port}`)
})

app.get('/',(req,res)=>{
    res.send("Hello World!");
})

app.get('/users',(req,res)=>{
res.send(" ")
});