import express from 'express';

const app=express();

app.get("/",(req,res)=>{
    res.send("<h1> Hello Express </h1>")
});

app.get('/about',(req,res)=>{
    res.send("We are FSD Developer")
})

app.post('/login',(req,res)=>{
    res.send({msg:`user login`})
})

app.put('/user/update/1',(req,res)=>{
    res.send({msg:`under update`})
})

app.delete('/users/1',(req,res)=>{
    res.send({msg:`remove user 1`})
})

app.use((req,res)=>{
    res.status(404).send("Not Found")      // it run in series if i write it first than always show 404 error
})

app.listen(3333,()=>console.log("Server is Running at 3333"));

// to find error use this method

/*const server=app.listen(3000,()=>console.log("server is running"))
ServiceWorkerRegistration.on("error",(err)=>{
    console.error("server listen error:",err);
});*/
