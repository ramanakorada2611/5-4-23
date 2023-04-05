const { findAllFromDb } = require("../database/connection")

 const dataPage=async(req,res)=>{
      try {
        const dataPage=await findAllFromDb({},"dataPage")
        return  res.status(200).send(dataPage)
      } catch (error) {
        console.log("Error occur in  fetching data",error)
       return res.status(500).send({message:"something went wrong"})
      }
  }  


  module.exports.getDataPage=dataPage;

