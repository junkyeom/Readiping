
import { connectDB } from '@/util/database';
import bcrypt from 'bcrypt';

export default async function handler(req, res) {
    if(req.method === 'POST') {
        const legEmail = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i
        
        if(!legEmail.test(req.body.email)) {
            console.log('이메일 형식 아님')
            res.status(500).json('이메일 형식이 잘못되었습니다.')
        }
        const hash = await bcrypt.hash(req.body.password, 10)
        req.body.password = hash;

        let db = (await connectDB).db('reading')
        await db.collection('user_cred').insertOne(req.body)
        res.redirect(302, '/')
    }
}