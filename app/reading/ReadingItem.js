'use client'

import Link from "next/link"
import { useRouter } from "next/navigation"
import { useEffect } from "react"
import './main.css'

export default function ReadingItem({result}) {    
    let router = useRouter()
    let keys = JSON.parse(result).length

    useEffect(()=>{
        router.refresh();
    },[result])

    return (
        <div>
            <h5 className='forum-title'>독서포럼</h5>
            <table className="reading-table">
                <thead>
                    <tr>
                        <th width='8%'>번호</th>
                        <th width='10%'>카테고리</th>
                        <th width='60%'>제목</th>
                        <th width='10%'>글쓴이</th>
                        <th>날짜</th>
                    </tr>   
                </thead>
                <tbody>
                    {
                    JSON.parse(result).map((a,i)=>
                        <tr className='table-item' key={keys-i}>
                            <td>{keys-i}</td>
                            <td>{a.type}</td>
                            <td className="td-title"><Link href={'/detail/'+a._id.toString()}>{a.title}<em>[{a.commentCnt}]</em></Link></td>
                            <td>{a.name}</td>
                            <td>{a.time}</td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
)}

