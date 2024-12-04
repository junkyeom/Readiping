'use client';

import './main.css';
import 'react-quill/dist/quill.snow.css';
import { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';

const ReactQuill = dynamic(() => import('react-quill'), { ssr: false, loading: () => <p>로딩중...</p>});


export default function Editor({setContentVal, defContentVal}) {
  // setContentVal는 함수, defContentVal는 default 변수입니당!

  const [value, setValue] = useState('');

  useEffect(() => {
    setValue(defContentVal);
  }, [defContentVal]);

  const handleChange = (newValue) => {
      setValue(newValue);
  };

  useEffect(()=>{
    setContentVal(value)
  },[value, setContentVal])
  

  return (
    <div className='editor'>
      <ReactQuill value={value} onChange={handleChange} />
    </div>
  );
}
