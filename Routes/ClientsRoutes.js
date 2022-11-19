//pour associer une route à une fonction
const { Router } = require("express");
var express = require("express");
const route = express.Router();
const ClientsController= require("../Controllers/clientsControllers");

route.get("",ClientsController.getAllClients);//la route et la fonction associe => routage
route.get("/:id",ClientsController.getClientByID);
route.post("",ClientsController.ajouterClient);
route.delete("/:id",ClientsController.supprimerClient);
route.put("/:id",ClientsController.modifierClient);

module.exports=route;

//mongos npm
//inslatter dotenv et mongos