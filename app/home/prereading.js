import Link from "next/link";
import { connectDB } from "@/util/database"
import PreReadingItem from "./preadingItem";

export default async function PreReading() {
    const db = (await connectDB).db('reading');
    let result = await db.collection('post').find().toArray()

    return (
        <div className="preading">
            <div className="preading-container">
                <h4 className="preading-title">📚 독서포럼</h4>
                <div>
                    <PreReadingItem result={JSON.stringify(result.reverse())}/>
                </div>
            </div>
        </div>
    );
}