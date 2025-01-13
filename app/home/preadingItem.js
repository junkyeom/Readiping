'use client'

import Link from "next/link";

export default function PreReadingItem({result}) {

    return (
            <div>
                {
                JSON.parse(result).slice(0,10).map((a,i)=>
                    <div className="preading-item-container" key={i}>
                        <span className="preading-item-type">{a.type}</span>
                        <span className="preading-item-title"><Link href={'/detail/'+a._id.toString()}>{a.title}<em>[{a.commentCnt}]</em></Link></span>
                    </div>
                )
                }
            </div>
    );
}