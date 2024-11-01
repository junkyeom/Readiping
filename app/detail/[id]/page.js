import { connectDB } from "@/util/database"
import { ObjectId } from "mongodb"
import CleanedResult from "./cleaned"

export default async function Detail(props){
    const db = (await connectDB).db("reading")
    let result = await db.collection('post').findOne({ _id : new ObjectId(props.params.id)})

    return (
        <div className="detail-page">
            <div className="detail-box">
                <h4>상세페이지</h4>
                <h4>{result.title}</h4>
                <CleanedResult content={result.content}/>
            </div>
        </div>
    )
}