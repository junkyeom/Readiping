'use client'

import { useEffect, useState } from "react"
import './main.css'

export default function Like({id, like}) {

    return (
        <button className="like-btn" onClick={()=>{
            let res = confirm('이 게시글을 추천합니다.')
            if(res) {
                fetch('/api/like', {method : 'POST', headers: {'Content-Type': 'application/json'}, body : JSON.stringify(id)});
                alert('추천했습니다')
                location.reload()
            }}
            }
            >
            <span className="material-symbols-outlined" style={{marginRight : '1px'}}>favorite</span><span>{like}</span>
        </button>
    )
}