import { connectDB } from "@/util/database"
import { ObjectId } from "mongodb"

export default async function Detail(props){
    const db = (await connectDB).db("reading")
    let result = await db.collection('post').findOne({ _id : new ObjectId(props.params.id)})

    return (
        <div className="detail-page">
            <div className="detail-box">
                <h4>상세페이지</h4>
                <h4>{result.title}</h4>
                <p>{result.content}</p>
            </div>
            {/* <div className="comment-box"><Comment id={props.params.id}/></div> */}
        </div>
    )
}