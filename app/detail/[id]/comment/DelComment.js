'use Client'

import { useRouter } from "next/navigation"


export default function DelComment({a}) {

    return (
        <span id={a._id} className={a.parent} onClick={(e)=>{
            fetch('/api/comment/delComment', {method : 'POST', headers : {'Content-Type' : 'application/json'}, 
            body : JSON.stringify({parent_id : e.target.className, comment_id : e.target.id})})
            .then((r)=>r.json())
            .then((r)=>{
                if(r=='성공') {
                    location.reload()
                }
            })
          }} >댓글 삭제</span>
    )
}