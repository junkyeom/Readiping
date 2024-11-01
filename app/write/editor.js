'use client';

import { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
import 'react-quill/dist/quill.snow.css';
import './main.css';

// Quill 컴포넌트를 동적으로 임포트
const ReactQuill = dynamic(() => import('react-quill'), { ssr: false, loading: () => <p>로딩중...</p>});


export default function Editor({sendText}) {
  const [value, setValue] = useState('');

  const handleChange = (value) => {
      setValue(value);
  };

  useEffect(()=>{
    sendText(value)
  },[value, sendText])
  

  return (
    <div className='editor'>
      <ReactQuill value={value} onChange={handleChange} />
    </div>
  );
}

