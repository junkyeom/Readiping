import { connectDB } from "@/util/database"
import { ObjectId } from "mongodb"
import CleanedResult from "./cleaned"
import Comment from "./comment"
import './main.css'
import { getServerSession } from "next-auth"
import { authOptions } from "@/pages/api/auth/[...nextauth]"

export default async function Detail(props){
    const db = (await connectDB).db("reading")
    let result = await db.collection('post').findOne({ _id : new ObjectId(props.params.id)})

    let session = await getServerSession(authOptions)

    return (
        <div className="detail-page">
            <div className="detail-box">
                <div id='detail-header'>
                    <p id='detail-type'>{result.type}</p>
                    <h1 id='detail-title'>{result.title}</h1>
                </div>
                <div id='detail-content'>
                    <CleanedResult content={result.content}/>
                </div>
                <div className="comment-box">
                    <Comment id={props.params.id}/>
                </div>
            </div>
        </div>
    )
}