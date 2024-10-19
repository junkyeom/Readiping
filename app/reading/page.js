import { connectDB } from "@/util/database";
import ReadingItem from "./ReadingItem";

export default async function Reading() {
  const db = (await connectDB).db('reading');
  let result = await db.collection('post').find().toArray()
  console.log(result)

    return (
      <div className="list-bg">
        <ReadingItem result={result}></ReadingItem>
      </div>
    )
  }