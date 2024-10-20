'use client'
import Editor from './editor';

export default function Write() {

    return (
      <div className='write-page'>
        <h5>글 작성</h5>
        <div className='write-header'>
          <div className='ctg-container'>
            <h5 className='ctg-title'>카테고리</h5>
            <select id='category'>
              <option value='null'>분류없음</option>
              <option value='nomal'>일반</option>
              <option value='review'>후기</option>
              <option value='ad'>AD</option>
            </select>
          </div>
          <div className='title-container'>
            <h5>제목</h5>
            <input type='text' placeholder='제목을 입력해 주세요'></input>
          </div>
        </div>
        <Editor/>
      </div>
    )
  }

