import { connectDB } from "@/util/database"

export default async function handler(req, res) {
        const db = (await connectDB).db("reading")

        if (req.method === 'POST') {
                if (req.body.title == '' || req.body.content == '') {
                        return res.status(500).json('빈칸 없이 쓰세요')
                    }
                try{
                        const data = JSON.parse(req.body)
                        await db.collection('post').insertOne(data)
                        console.log(data.title)
                        console.log(data.content)
                        return res.status(200).json('성공')
                }
                catch(error) {
                        console.log(error)
                        return res.status(500).json(error)
                }

        }
}

