import { connectDB } from "@/util/database"
import { ObjectId } from "mongodb"

export default async function handler(req, res) {
  let db = (await connectDB).db('reading');

    if (req.method == 'GET'){
        try{
            let result = await db.collection('post').aggregate([{$sort : {like : -1}}]).toArray()
            return res.status(200).json(result)
        } catch (error) {   
            return res.status(500).json(error)
            }
        }
}