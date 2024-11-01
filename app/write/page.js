'use client'

import { useState } from 'react';
import Editor from './editor';
import { useRouter } from 'next/navigation';

export default function Write() {
  let router = useRouter()
  let [val, setVal]  = useState('')
  let [textVal, setTextVal] = useState('');
  let [type, setType] = useState('')

  let handleText = (a) => {setTextVal(a)}



    return (
      <div className='write-page'>
        <h5>글 작성</h5>
        <div className='write-header'>
          <div className='ctg-container'>
            <h5 className='ctg-title'>카테고리</h5>
            <select id='category' onChange={(e)=>{
              setType(e.target.value)
              console.log(e.target.value)
              }}>
              <option value='null'>분류없음</option>
              <option value='일반'>일반</option>
              <option value='후기'>후기</option>
              <option value='AD'>AD</option>
            </select>
          </div>
          <div className='title-container'>
            <h5>제목</h5>
            <input type='text' value={val} onChange={(e)=>{
              setVal(e.target.value)
            }} placeholder='제목을 입력해 주세요'></input>
          </div>
        </div>
        <Editor sendText={handleText}/>
        <button id='write-button' onClick={()=>{
          fetch('/api/write',{
            method : 'POST', 
            body : JSON.stringify({title : val, content : textVal, type : type})})
            .then((r)=>{
              if(r.status == 200) {
                router.push('/reading')
              }})
            
        }}>작성</button>
      </div>
    )
  }

