import { connectDB } from "@/util/database"
import { ObjectId } from "mongodb"
import CleanedResult from "./cleaned"
import Comment from "./Comment"
import './main.css'
import { getServerSession } from "next-auth"
import { authOptions } from "@/pages/api/auth/[...nextauth]"
import Link from "next/link"

export default async function Detail(props){
    const db = (await connectDB).db("reading")
    let result = await db.collection('post').findOne({ _id : new ObjectId(props.params.id)})

    let session = await getServerSession(authOptions)

    return (
        <div className="detail-page">
            <div className="detail-box">
                <div id='detail-header'>
                    <p id='detail-type'>{result.type}</p>
                    <h2 id='detail-title'>{result.title}</h2>
                </div>
                <div id='detail-content'>
                    <CleanedResult content={result.content}/>
                </div>
                <div id='detail-tool'>
                    { session && session.user.id == result.author ? 
                    <div id='session-tool'>
                        <Link href={'/edit/' + result._id}><span className="tool-btn">수정</span></Link>
                        <Link href='/'><span className="tool-btn">삭제</span></Link>
                    </div> : 
                    <div>
                        <Link href='/reading'><span className="tool-btn">목록</span></Link>
                    </div>}
                </div>
                <div className="comment-box">
                    <Comment id={props.params.id}/>
                </div>
            </div>
        </div>
    )
}