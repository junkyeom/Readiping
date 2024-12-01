'use client'

import { useEffect, useState } from "react"

export default function HotPost() {

    let [hotpostVal, setHotpostVal] = useState('')

    useEffect(()=>{
        fetch('/api/hotpost', {method : 'GET', headers: {'Content-Type': 'application/json'}})
        .then((r)=>r.json())
        .then((data)=>{})
    },[])


    return (
        <div>
            <h4>오늘의 인기글</h4>
            <ul>
                {/* { hotpostVal.map((a,i)=>
                <li>{a}</li>) } */}
            </ul>
        </div>
    )
}