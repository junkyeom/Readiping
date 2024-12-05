import { connectDB } from "@/util/database"
import { ObjectId } from "mongodb"

export default async function handler(req, res) {
    let db = (await connectDB).db('reading');

    
    if (req.method === 'POST') {
        try {
            console.log(req.body.comment_id)
            await db.collection('comment').deleteOne({_id : new ObjectId(req.body.comment_id)})
            await db.collection('post').updateOne({_id : new ObjectId(req.body.parent_id)}, {$inc : {commentCnt : -1}})
            // return res.status(200).json('성공')
            return res.status(500).json('성공')
        } catch (error) {
            console.log(error)
            return res.status(500).json(error)
        }
    }
}