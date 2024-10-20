'use client'

import { useState } from 'react';
import dynamic from 'next/dynamic';
import 'react-quill/dist/quill.snow.css';
import './main.css'

const ReactQuill = dynamic(() => import('react-quill'), { ssr: false });

export default function Editor() {
  const [content, setContent] = useState('');

  const modules = {
    toolbar: [
      [{ header: '1' }, { header: '2' }],
      [{ list: 'ordered' }, { list: 'bullet' }],
      ['bold', 'italic', 'underline'],
      [{ color: [] }, { background: [] }],
      ['link', 'image'],
      [{ align: [] }],
      ['clean'],
    ],
  };

  // Formats allowed in the editor
  const formats = [
    'header',
    'size',
    'bold',
    'italic',
    'underline',
    'list',
    'bullet',
    'link',
    'image',
    'color',
    'background',
    'align',
  ];

  const handleChange = (value) => {
    setContent(value);
  };

    return (
      <div className='editor'>
        <ReactQuill value={content} modules={modules} formats={formats} onChange={handleChange} />
      </div>
    )
  }