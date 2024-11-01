'use client'

import Link from "next/link"
import { useRouter } from "next/navigation"
import { useEffect } from "react"

export default function ReadingItem({result}) {    
    let router = useRouter()
    let keys = JSON.parse(result).length

    useEffect(()=>{
        router.refresh();
    },[result])

    return (
        <div>
            <h4>독서포럼</h4>
            <table className="table">
                <thead>
                    <tr>
                        <th>번호</th>
                        <th>카테고리</th>
                        <th>제목</th>
                    </tr>   
                </thead>
                <tbody>
                    {
                    JSON.parse(result).map((a,i)=>
                        <tr className='table-list' key={keys-i}>
                            <td>{keys-i}</td>
                            <td>{a.type}</td>
                            <td><Link href={'/detail/'+a._id.toString()}>{a.title}</Link></td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
)}