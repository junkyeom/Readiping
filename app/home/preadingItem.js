'use client'

import Link from "next/link";

export default function PreReadingItem({result}) {

    return (
        <table className="preading-table">
                <tbody>
                    {
                    JSON.parse(result).slice(0,10).map((a,i)=>
                        <tr className='preading-item' key={i}>
                            <td className="preading-item-type">{a.type}</td>
                            <td className="preading-item-title"><Link href={'/detail/'+a._id.toString()}>{a.title}<em>[{a.commentCnt}]</em></Link></td>
                        </tr>
                    )
                    }  
                </tbody>
            </table>
    );
}