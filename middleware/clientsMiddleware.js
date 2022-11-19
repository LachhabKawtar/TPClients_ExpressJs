//les fonctions middlewares
const loggingUrls=(req,res,next)=>{
    console.log("Logging Urls Fct :"+req.url)
    next()    
  }
//next()   //passer la main aux deuxième middlewares
const loggingParams=(req,res,next)=>{
  console.log("Logging Params FCT:"+req.params)
  next()
}  

module.exports={
    loggingParams,
    loggingUrls
}