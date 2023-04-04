const express=require('express')
const mainRouter=express.Router()
const DataNew=require('../controller/data')

mainRouter.get('/dataPage',DataNew.getDataPage)

module.exports=mainRouter