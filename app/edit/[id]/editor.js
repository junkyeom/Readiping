'use client';

import './main.css';
import 'react-quill/dist/quill.snow.css';
import { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';

const ReactQuill = dynamic(() => import('react-quill'), { ssr: false, loading: () => <p>로딩중...</p>});


export default function Editor({sendText, defText}) {
  // sendText는 함수, defText는 default 변수입니당!

  const [value, setValue] = useState('');

  const handleChange = (value) => {
      setValue(value);
  };

  useEffect(() => {
    setValue(defText);
  }, [defText]);

  useEffect(()=>{
    sendText(value)
  },[value, sendText])
  

  return (
    <div className='editor'>
      <ReactQuill value={value} onChange={handleChange} />
    </div>
  );
}

