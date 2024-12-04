'use client'

import './main.css'
import { useEffect, useState } from 'react';
import Editor from './editor';
import { useRouter } from 'next/navigation';

export default function Edit(props) {

  let router = useRouter()
  let [type, setType] = useState('null')
  let [titleVal, setTitleVal]  = useState('')
  let [contentVal, setContentVal] = useState('');
  let [defContentVal, setDefContentVal] = useState('')


  useEffect(()=>{
    fetch(`/api/edit/${props.params.id}`, {method : 'GET'})
    .then((r)=>r.json())
    .then((data)=>{
      setTitleVal(data.title); 
      setDefContentVal(data.content); 
      setType(data.type ); 
    });
  },[props.params.id])

 
    return (
      <div id='edit-page'>
        <h4>수정 페이지</h4>
        <div className='write-header'>
          <div className='ctg-container'>
            <h5 className='ctg-title'>카테고리</h5>
            <select id='category' value={type} onChange={(e)=>{
              setType(e.target.value)
              }}>
              <option value='null'>분류없음</option>
              <option value='일반'>일반</option>
              <option value='후기'>인증/후기</option>
              <option value='창작'>창작</option>
              <option value='AD'>AD</option>
            </select>
          </div> 
          <div className='title-container'>
            <h5 className='title-title'>제목</h5>
            <input className='title-input' type='text' value={titleVal} onChange={(e)=>{
              setTitleVal(e.target.value)
            }}></input>
          </div>
        </div>
        <Editor setContentVal={setContentVal} defContentVal={defContentVal}/>
        <button className='write-btn' style={{marginLeft: '0'}} onClick={()=>{
          fetch('/api/edit/edit',{
            method : 'POST', 
            headers: { 'Content-Type': 'application/json' },
            body : JSON.stringify({id : props.params.id ,title : titleVal, content : contentVal, type : type})})
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
