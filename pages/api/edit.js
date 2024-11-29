import { connectDB } from "@/util/database"
import { ObjectId } from "mongodb"

export default async function handler(req, res) {
    const db = (await connectDB).db("reading")
    let result = await db.collection('post').find().toArray()
    console.log(req.body)

    if (req.method == "POST") {
        if (req.body.title == '' || req.body.content == '') {
            return res.status(500).json('빈칸 없이 쓰세요')
        }
        try{
            await db.collection('post').updateOne({_id : new ObjectId(req.body._id)},{$set : {title : req.body.title, content : req.body.content}})
            res.redirect(302, '/reading')
        } catch (error) {
            return res.status(500).json('에러남요')
        }
    }
}