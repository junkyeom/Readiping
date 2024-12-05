'use Client'

import { useRouter } from "next/navigation"


export default function DelComment({a}) {

    return (
        <span className="material-symbols-outlined comment-del-symbol">
            <span id={a._id} className={a.parent} onClick={(e)=>
                    {
                    if(confirm('이 댓글을 삭제하시겠습니까?')) {
                    fetch('/api/comment/delComment', {method : 'POST', headers : {'Content-Type' : 'application/json'}, 
                    body : JSON.stringify({parent_id : e.target.className, comment_id : e.target.id})})
                    .then((r)=>r.json())
                    .then((r)=>{
                    if(r=='성공') {
                        location.reload()}})
                }}
            } >
        Delete</span>
        </span>
    )
}