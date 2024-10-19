import { connectDB } from "@/util/database";
import ReadingItem from "./ReadingItem";

export default async function Reading() {
  const db = (await connectDB).db('reading');
  let result = await db.collection('post').find().toArray()
  result.reverse()

    return (
      <div className="table-bg">
        <ReadingItem result={result}></ReadingItem>
      </div>
    )
  }