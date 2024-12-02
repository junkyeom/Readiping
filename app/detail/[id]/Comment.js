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
          <div className="comment-header">
            <h4 style={{margin:'0'}}><span className="material-symbols-outlined">chat</span> 댓글 <span style={{color : '#ff7f7f'}}>{list.length}</span></h4>
          </div>
          <div className="comment-list">
              {
                  list.length > 0 ?
                  list.map((a, i)=>{
                      return (<div key={i} className="comment-item">
                          <h5 className="comment-name">{a.name}</h5>
                          <p className='comment-content'>{a.content}</p>
                        </div>)
                  }) : null
              }
          </div>
          <h5 style={{fontSize : '1em', margin : '1em 0'}}>댓글 달기</h5>
          <textarea className='comment-input' wrap="soft" onChange={(e)=>{ setComment(e.target.value)}}/>
          <button onClick={()=>{
            fetch('/api/comment', {method : 'POST', headers: {'Content-Type': 'application/json'}, body : JSON.stringify({'comment' : comment, 'id' : props.id})});
            location.reload();
          }}>댓글전송</button> 
        </div>
  )
} 
