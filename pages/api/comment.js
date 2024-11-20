import { connectDB } from "@/util/database"
import { ObjectId } from "mongodb"
import { getServerSession } from "next-auth"
import { authOptions } from "./auth/[...nextauth]"

export default async function handler(req, res) {
  let db = (await connectDB).db('reading');
  let session = await getServerSession(req, res, authOptions)

  if (req.method == 'POST'){
    req.body = JSON.parse(req.body)
    let body = {
      content : req.body.comment,
      parent : new ObjectId(req.body.id),
      author : session.user.id,
      name : session.user.name
    }

    await db.collection('comment').insertOne(body)
    return res.redirect(302, '/list')
    }

    if(req.method == 'GET') {
        let comment = await db.collection('comment').find({parent : new ObjectId(req.query.id)}).toArray()
        return res.status(200).json(comment)
    }
} 