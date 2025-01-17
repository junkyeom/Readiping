'use client'

import Link from "next/link";
import { useEffect, useState } from "react"

export default function HotPost() {
    const [hotpostVal, setHotpostVal] = useState('');
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        fetch('/api/hotpost', {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' }
        })
        .then((response) => response.json())
        .then((data) => {
            setHotpostVal(data);
            setIsLoading(false);
        })
        .catch((error) => {
            console.error("에러 발생 :", error);
            setIsLoading(false);
        });
    }, []);

    return (
        <div className="hotpost">
            <div className="hotpost-container">
                <h5 className="hotpost-title">🔥Hot Post</h5>
                {isLoading ? (
                    <p>로딩 중...</p>
                ) : hotpostVal.length > 0 ? (
                    <div className="hotpost-list">
                        {hotpostVal.map((a, i)=>(
                            <Link href={'/detail/'+a._id}><div className="hotpost-item" key={i}><span className="ranking">{i+1}</span><span>{a.title}<em>[{a.commentCnt}]</em></span></div></Link>
                        ))}
                    </div>
                ) : (
                    <p>인기 글이 없습니다.</p>
                )}
            </div>
        </div>
    );
}