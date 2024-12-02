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
            console.log(data)
            setHotpostVal(data);
            setIsLoading(false);
            console.log(hotpostVal)
        })
        .catch((error) => {
            console.error("Error fetching hot posts:", error);
            setIsLoading(false);
        });
    }, []);

    return (
        <div className="hot-post">
            <div className="hotpost-container">
                <h4 className="hotpost-title">🔥Hot Post</h4>
                {isLoading ? (
                    <p>로딩 중...</p>
                ) : hotpostVal.length > 0 ? (
                    <div className="hotpost-list">
                        {hotpostVal.map((a, i) => (
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