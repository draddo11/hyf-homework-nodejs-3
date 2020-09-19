const express = require ('express');
const port = 3000;

const app = express();


app.listen(port,()=>{
    console.log(`server running on port: ${port}`)
})

app.get('/',(req,res)=>{
    res.send("Hello World!");
<<<<<<< HEAD
})

app.get('/users',(req,res)=>{
res.send(" ")
});
=======
})
>>>>>>> 33664810fd475fb81ed6344655c7ea4c06e6591b
git