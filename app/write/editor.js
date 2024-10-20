'use client'

import { useState } from 'react'
import dynamic from 'next/dynamic';
import 'react-quill/dist/quill.snow.css';
import './main.css'

const ReactQuill = dynamic(() => import('react-quill'), { ssr: false });

export default function Editor() {
  const [content, setContent] = useState('');
  
    const handleChange = (value) => {
      setContent(value);
    };


    return (
      <div className='editor'>
        <ReactQuill value={content} onChange={handleChange}/>
      </div>
    )
  }