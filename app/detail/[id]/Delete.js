'use client'

import './main.css'

export default function Delete({id}) {

    return (
        <span className="tool-btn" onClick={()=>{
            let res = confirm('이 글을 정말로 삭제하시겠습니까?')
            if(res) {
                fetch('/api/delete', {method : 'POST', body : JSON.stringify(id)})
                .then((r)=>r.json())
                .then((r)=>{
                    if(r=='성공') {
                        alert('글이 성공적으로 삭제되었습니다.')
                    }
                })
            }
        }}>삭제</span>
    )
}