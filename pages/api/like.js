import { connectDB } from "@/util/database"
import { ObjectId } from "mongodb"
import { getServerSession } from "next-auth"
import { authOptions } from "./auth/[...nextauth]"

export default async function handler(req, res) {
  let db = (await connectDB).db('reading');
  let session = await getServerSession(req, res, authOptions)

    if (req.method == 'POST'){
        try{
            console.log(req.body)
            await db.collection('post').updateOne({_id : new ObjectId(req.body)}, {$inc : {like : 1}})
            return res.status(200).json('성공')
        } catch (error) {
            return res.status(500).json(error)
            }
        }
}