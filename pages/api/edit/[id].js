import { connectDB } from "@/util/database"
import { ObjectId } from "mongodb"

export default async function handler(req, res) {

    const db = (await connectDB).db("reading")
    let result = await db.collection('post').findOne({ _id : new ObjectId(req.query.id)})

    return res.status(200).json({
        title : result.title,
        content : result.content,
        type : result.type
    })
}