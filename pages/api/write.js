import { connectDB } from "@/util/database"

export default async function handler(req, res) {
        const db = (await connectDB).db("reading")

        if (req.method === 'POST') {
                if (req.body.title == '' || req.body.content == '') {
                        return res.status(500).json('빈칸 없이 쓰세요')
                    }
                try{
                        await db.collection('post').insertOne(req.body)
                        console.log(JSON.parse(req.body).title)
                        console.log(JSON.parse(req.body).content)
                        res.redirect(302, '/reading')
                }
                catch(error) {
                        return res.status(500).json(error)
                }

        }
}

