//Fonction qui traite les requette 

const { json } = require("express")
const client = require("../Models/client");

const getAllClients=(req,resp)=>{
    client.find({})
    .then(result=>resp.json({result}))
}
//Client par ID
const getClientByID=(req,res)=>{
    client.findOne({_id:req.params.id})
    .then(result=>res.json({result}))
}
//ajouter client
const ajouterClient= (req,res)=>{
    const c = new client({
       ...req.body 
       //faire une copie de  tout les éléments de body
      });
      c.save()
        .then(() => res.status(201).json({ message: 'Objet enregistré !'}))
        .catch(error => res.status(400).json({ error }));
    //client.create(req.body)
    //.then(result=>res.json({msg:"client est bien ajouté"}))
}
//Supprimer Client
const supprimerClient=(req,res)=>{
       client.deleteOne({_id:req.params.id})
       .then(result=>res.json({msg:"client bien supprimée"}))
}
//ModifierClient
const modifierClient=(req,res)=>{
       client.updateOne({_id: req.params.id},{...req.body, _id: req.params.id})
       .then(()=>res.status(200).json({msg:"Client modifié!"}))
       .catch(error =>res.status(400).json({error}))
}


module.exports={
    getAllClients,
    getClientByID,
    modifierClient,
    supprimerClient,
    ajouterClient
}


























//Modifier
/*app.put("/api/Clients/:id",(res,req)=>{
    const id = req.params.id;
    const index = Clients.findIndex(client => client.idC == id);
    if(index==-1)   return res.status(404).send('Client Not found');
    else{ //client inexistant
    const clients = {
        id: id,
        Nom: req.body.Nom,
        Prenom: req.body.Prenom
    }
    Client[index] =c;
}})*/

//exporter des fonctions pour les utilisées dans d'autre fichier
