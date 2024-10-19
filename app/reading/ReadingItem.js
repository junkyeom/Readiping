'use client'

import Link from "next/link"

export default function ReadingItem({result}) {    

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
                    result.map((a,i)=>
                        <tr className='table-list' key={result.length-i}>
                            <td>{result.length-i}</td>
                            <td>일반</td>
                            <td><Link href="/">{a.title}</Link></td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
)}