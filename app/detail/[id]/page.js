import { connectDB } from "@/util/database"
import { ObjectId } from "mongodb"
import CleanedResult from "./cleaned"
import './main.css'

export default async function Detail(props){
    const db = (await connectDB).db("reading")
    let result = await db.collection('post').findOne({ _id : new ObjectId(props.params.id)})

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
            </div>
        </div>
    )
}