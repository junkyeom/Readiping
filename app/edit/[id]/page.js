import './main.css'
import { ObjectId } from "mongodb";
import { connectDB } from "@/util/database.js"
import Editor from "@/app/write/editor";

export default async function Edit(props) {
  let db = (await connectDB).db('reading')
  let result = await db.collection('post').findOne({_id : new ObjectId(props.params.id)});
  return (
    <div className="p-20">
        <h4>수정 페이지</h4>
        <form action="/api/edit" method="POST">
            <input className='title-input' type='text' name='title' defaultValue={result.title}/>
            <input type='text' name="content" defaultValue={result.content}/>
            {/* <Editor sendText={result.content}/> */}
            <input className="_id" name="_id" defaultValue={props.params.id}/>
            <button type="submit">전송</button>
        </form>
    </div>
  )
} 