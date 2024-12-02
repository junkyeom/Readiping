import { connectDB } from "@/util/database"
import { getServerSession } from "next-auth"
import { authOptions } from "./auth/[...nextauth]"

export default async function handler(req, res) {
        const db = (await connectDB).db("reading")
        let session = await getServerSession(req, res, authOptions)
        const data = JSON.parse(req.body)

        if(session) {
                data.author = session.user.id;
                data.name = session.user.name;
        } else {
                return res.status(500).json('세션없음')
        }
        if (req.method === 'POST') {
                
                if(data.type == '') {
                        return res.status(500).json('분류빔')
                } else if (data.title == '') {
                        return res.status(500).json('제목빔')
                } else if(data.content.replace(/<[^>]+>/g, '') == '') {
                        return res.status(500).json('본문빔')
                }
                try{
                        let time = new Date().toLocaleDateString()
                        data.time = time;
                        data.like = 0;
                        data.commentCnt = 0;
                        await db.collection('post').insertOne(data)
                        return res.status(200).json('성공')
                }
                catch(error) {
                        return res.status(500).json(error)
                }

        }

}

