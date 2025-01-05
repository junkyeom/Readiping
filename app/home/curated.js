'use client'

import Image from "next/image";
import Link from "next/link";

export default function Curated() {

    return (
        <div className="curated">
            <div className="curated-container">
                <div>
                    <Link href='/detail/67502fa1a6fe45b7d7858175' className="curated-link">
                        <div className="curated-item">
                            <Image 
                                src="/images/curated-2.jpeg"
                                alt="Example image" 
                                fill
                                style={{ objectFit: 'cover' }}
                            />
                        </div>
                        <div className="curated-content">
                            <h4 className='curated-title'>
                                독서하면서 듣기 좋은 노래 추천
                            </h4>
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
                                style={{ objectFit: 'cover' }}
                            />
                        </div>
                        <div className="curated-content">
                            <h4 className='curated-title'>
                                키에르케고르 &lt;죽음에 관하여&gt; 리뷰
                            </h4>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    );
}