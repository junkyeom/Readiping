import { connectDB } from "@/util/database"

export default async function handler(req, res) {
        const db = (await connectDB).db("reading")
        let result = await db.collection('post').find().toArray()

        if (req.method === 'POST') {
                try{
                        await db.collection('post').insertOne(req.body)
                        console.log(JSON.parse(req.body).title)
                        console.log(JSON.parse(req.body).content)
                        res.status(300).json('응애')
                }
                catch(error) {
                        return res.status(500).json('에러남')
                }

        }
}

