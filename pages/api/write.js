import { connectDB } from "@/util/database"

export default async function handler(req, res) {
        const db = (await connectDB).db("reading")

        if (req.method === 'POST') {
                const data = JSON.parse(req.body)
                if(data.type == '') {
                        return res.status(500).json('분류빔')
                } else if (data.title == '') {
                        return res.status(500).json('제목빔')
                } else if(data.content.replace(/<[^>]+>/g, '') == '') {
                        return res.status(500).json('본문빔')
                }
                try{ 
                        await db.collection('post').insertOne(data)
                        return res.status(200).json('성공')
                }
                catch(error) {
                        return res.status(500).json(error)
                }

        }
}

