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
      <div id='write-page'>
        <h4>글 작성</h4>
        <div className='write-header'>
          <div className='ctg-container'>
            <h5 className='ctg-title'>카테고리</h5>
            <select id='category' onChange={(e)=>{
              setType(e.target.value)
              console.log(e.target.value)
              }}>
              <option value='null'>분류없음</option>
              <option value='일반'>일반</option>
              <option value='후기'>인증/후기</option>
              <option value='후기'>창작</option>
              <option value='AD'>AD</option>
            </select>
          </div>
          <div className='title-container'>
            <h5 className='title-title'>제목</h5>
            <input className='title-input' type='text' value={val} onChange={(e)=>{
              setVal(e.target.value)
            }} placeholder='제목을 입력해 주세요'></input>
          </div>
        </div>
        <Editor sendText={handleText}/>
        <button className='write-btn' style={{marginLeft: '0'}} onClick={()=>{
          fetch('/api/write',{
            method : 'POST', 
            body : JSON.stringify({title : val, content : textVal, type : type})})
            .then((r)=>r.json())
            .then((r)=>{
              switch (r) {
                case '성공':
                  router.push('/reading')
                  break
                case '분류빔':
                  alert('카테고리를 선택해 주세요')
                  break
                case '제목빔':
                  alert('제목을 작성해 주세요')
                  break
                case '본문빔':
                  alert('본문을 작성해 주세요')
                  break
                case '세션없음':
                  alert('로그인해주세요')
                  break
              }})   
        }}>작성</button>
      </div>
    )
  }

