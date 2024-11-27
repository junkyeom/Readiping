'use client'


import { useEffect, useState } from "react"

export default function Comment(props) {
    let [comment, setComment] = useState('');
    let [list, setList] = useState('');

    useEffect(()=>{
        fetch(`/api/comment?id=${props.id}`, {method : 'GET'})
        .then((r)=>{return r.json()})
        .then((result)=>{setList(result)})
    },[])

    return (
        <div className="comment">
          <h4>💬 댓글 {list.length}</h4>
          <h5>댓글목록</h5>
          <div>
                {
                    list.length > 0 ?
                    list.map((a, i)=>{
                        return <div key={i}><p>{a.name}   :   {a.content}</p></div>
                    }) : <p>댓글없음</p>
                }
            </div>
          <h5>댓글 달기</h5>
          <input onChange={(e)=>{ setComment(e.target.value)}}/>
          <button onClick={()=>{
            fetch('/api/comment', {method : 'POST', body : JSON.stringify({'comment' : comment, 'id' : props.id})});
            location.reload();
          }}>댓글전송</button> 
        </div>
  )
} 