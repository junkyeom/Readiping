'use client';

import { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
import 'react-quill/dist/quill.snow.css';
import './main.css';

// Quill 컴포넌트를 동적으로 임포트
const ReactQuill = dynamic(() => import('react-quill'), { ssr: false });

const modules = {
  toolbar: [
    [{ 'font': ['noto-sans-kr', 'nanum-gothic', 'arial'] }],  // 사용할 폰트 목록
    [{ 'header': [1, 2, false] }],
    ['bold', 'italic', 'underline'],
    [{ 'list': 'ordered' }, { 'list': 'bullet' }],
    ['link', 'image'],
    ['clean']  // 포맷 제거 버튼
  ]
};

export default function Editor() {
  const [value, setValue] = useState('');

  // 클라이언트에서 Quill 설정
  useEffect(() => {
    const Quill = require('quill');
    const Font = Quill.import('formats/font');
    Font.whitelist = ['noto-sans-kr', 'nanum-gothic', 'arial'];
    Quill.register(Font, true);
  }, []);

  return (
    <div className='editor'>
      <ReactQuill theme="snow" value={value} modules={modules} onChange={setValue} />
    </div>
  );
}