'use client'

import '../main.css'
import { useState, useEffect } from 'react';
import DelComment from "./DelComment";

export default function CommentList({id, sessionId}) {

    let [comment, setComment] = useState('');
    let [list, setList] = useState('');

    useEffect(()=>{
        fetch(`/api/comment/comment?id=${id}`, {method : 'GET'})
        .then((r)=>{return r.json()})
        .then((result)=>{setList(result)})
    },[])

    return (
        <div>
            <div className="comment-header">
                <h5 style={{margin:'0'}}><span class="material-symbols-outlined">chat</span>댓글 <span style={{color : '#ff7f7f'}}>{list.length}</span></h5>
            </div>
            <div className="comment-list">
              {
                  list.length > 0 ?
                  list.map((a, i)=>{
                      console.log(a)
                      return (
                      <div key={i} className="comment-item">
                        <h6 className="comment-name">{a.name}</h6>
                        {/* <div style={{display : 'flex'}}> */}
                            <p className='comment-content'>{a.content}</p>
                            {sessionId==a.author ? 
                            <div className='comment-del-btn'><DelComment a={a}/></div> : null}
                        {/* </div> */}
                      </div>)
                  }) : null
              }
          </div>
          <h6 style={{fontSize : '1em', margin : '1em 0'}}>댓글 달기</h6>
          <textarea className='comment-input' wrap="soft" onChange={(e)=>{ setComment(e.target.value)}}/>
          <button onClick={()=>{
            fetch('/api/comment/comment', {method : 'POST', headers: {'Content-Type': 'application/json'}, body : JSON.stringify({'comment' : comment, 'id' : id})});
            location.reload();
          }}>댓글전송</button> 
        </div>
    )
}