import { connectDB } from "@/util/database";
import ReadingItem from "./ReadingItem";
import Link from "next/link";
import './main.css'

export default async function Reading() {
  const db = (await connectDB).db('reading');
  let result = await db.collection('post').find().toArray()
  result.reverse()

    return (
      <div id='list-page'>
        <div className="table-bg">
          <ReadingItem result={JSON.stringify(result)}></ReadingItem>
        </div>
        <Link href='/write'><button className='write-button'>작성</button></Link>
      </div>
   )
}
