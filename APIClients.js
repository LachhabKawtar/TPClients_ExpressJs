
const express=require("express")
const app=express()
const mongosse=require("mongoose")
const clienttMidl=require("./middleware/clientsMiddleware")
const router=require("./Routes/ClientsRoutes");

require("dotenv").config()//charger url et le stocker dans l'objet process
mongosse.connect(process.env.db_url)
.then(result=>
    app.listen(3222,()=>{
        console.log("server is running.. and connection established ");
    }))
.catch(error=>console.log("error"))

app.use("/Clients",router);

app.get("/",(req,res)=>{
   res.send("<h2> Bienvneue dans notre app Express</h2>");
});

 
/*app.listen(4022,()=>{
    console.log("server is running");
});*/