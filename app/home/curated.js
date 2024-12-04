'use client'

import Image from "next/image";
import Link from "next/link";

export default function Curated() {

    return (
        <div className="curated">
            <div className="curated-container">
                <div>
                    <Link href='/detail/674ffba5ecc611c13b338b4d' className="curated-link">
                        <div className="curated-item">
                            <Image 
                                src="/images/curated-2.jpeg"
                                alt="Example image" 
                                fill
                                objectFit="cover"
                            />
                        </div>
                        <div className="curated-content">
                            <p style={{margin : '0', color : '#333', fontWeight : '700'}}>
                                BOUND X IGOR
                            </p>
                        </div>
                    </Link>
                </div>
                <div>
                    <Link href='/detail/674ffba5ecc611c13b338b4d' className="curated-link">
                        <div className="curated-item">
                            <Image 
                                src='/images/curated-1.jpg'
                                alt="Example image" 
                                fill
                                objectFit="cover"
                            />
                        </div>
                        <div className="curated-content">
                            <p style={{margin : '0', color : '#333', fontWeight : '700'}}>
                                키에르케고르 &lt;죽음에 관하여&gt; 리뷰
                            </p>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    );
}