const mongoss=require('mongoose')

const clientSchema = new mongoss.Schema({
    nom: String,
    prenom:String,
    age:Number
})

const client= mongoss.model("client",clientSchema);

module.exports=client; 