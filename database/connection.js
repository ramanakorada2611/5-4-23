const {MongoClient} = require("mongodb");
const url="mongodb+srv://RamanaKorada:RamanaKorada@cluster0.0j4affb.mongodb.net/data-backend?retryWrites=true&w=majority"
const client = new MongoClient(url);
const findAllFromDb = async (query,collectionName) => {
    try {
        await client.connect();
        console.log("Connection to db is successful")
        const database = client.db("data-backend");
        const collection = database.collection(collectionName)
        const dbResponse = await collection.find(query).toArray();
        // console.log("db res",dbResponse)
        await client.close();
        return dbResponse;
        
    } catch (error) {
        return error.message;
    }
   
}
module.exports = {findAllFromDb };