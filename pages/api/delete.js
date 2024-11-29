import { connectDB } from "@/util/database"
import { ObjectId } from "mongodb"
import { getServerSession } from "next-auth"
import { authOptions } from "./auth/[...nextauth]"

export default async function handler(req, res) {
    const db = (await connectDB).db("reading")
    let session = await getServerSession(req, res, authOptions)

    if (req.method == "POST") {

        // if(session) {
        //     if(session.user.email == JSON.parse(req.body).author) {
                try{
                    await db.collection('post').deleteOne({_id : new ObjectId(JSON.parse(req.body))})
                    return res.status(200).json('성공')
                } catch (error) {
                    return res.status(500).json('에러남요')
                }
            // } else {
            //     return res.status(500).json('님이 작성한 글이 아닙니다')
            // }
        // } else {
        //     return res.status(500).json('로그인이나 하고 와라')
    }
    // }
}