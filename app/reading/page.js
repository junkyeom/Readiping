import { connectDB } from "@/util/database";
import ReadingItem from "./ReadingItem";
import Link from "next/link";
import './main.css'
import { getServerSession } from "next-auth";
import { authOptions } from "@/pages/api/auth/[...nextauth]";

export default async function Reading() {
  const db = (await connectDB).db('reading');
  let result = await db.collection('post').find().toArray()
  let session = await getServerSession(authOptions)

    return (
      <div id='list-page'>
        <div className="table-bg">
          <ReadingItem result={JSON.stringify(result.reverse())}></ReadingItem>
        </div>
        { session ? <Link href='/write'><button className='write-btn'>작성</button></Link> : null}
      </div>
   )
}