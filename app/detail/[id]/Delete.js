'use client'

import './main.css'

export default function Delete({id}) {

    return (
        <span className="tool-btn" onClick={()=>{
            let res = confirm('이 글을 정말로 삭제하시겠습니까?')
            if(res) {
                fetch('/api/delete', {method : 'POST', body : JSON.stringify(id)})
                .then((r)=>{r.json()})
                .then((result)=>{console.log(result)})
            }
        }}>삭제</span>
    )
}