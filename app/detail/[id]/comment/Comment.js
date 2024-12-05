import CommentList from "./CommentList";
import { getServerSession } from "next-auth"
import { authOptions } from "@/pages/api/auth/[...nextauth]";

export default async function Comment({id}) {

    let session = await getServerSession(authOptions)

    return (
        <div className="comment">
          <CommentList id={id} sessionId={session?.user.id}/>
        </div>
  )
} 
