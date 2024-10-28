
export default async function handler(req, res) {
        const db = (await connectDB).db("")
        let result = await db.collection('post').find().toArray()

        if (req.method === 'POST') {

                console.log(JSON.parse(req.body).title)
                console.log(JSON.parse(req.body).text)
                res.redirect(302, '/reading')
        }
}