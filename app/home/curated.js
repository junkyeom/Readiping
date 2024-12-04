'use client'

import Image from "next/image";
import Link from "next/link";

export default function Curated() {

    return (
        <div className="curated">
            <div className="curated-container">
            <div>
                <Link href='detail/674ffba5ecc611c13b338b4d'>
                    <div style={{width : '445px', height : 'auto'}}>
                        <Image 
                            src='/images/crated-1.jpg'
                            alt="Example image" 
                            fill
                        />
                    </div>
                </Link>
                </div>
                <div>
                    <Link href='detail/674ffba5ecc611c13b338b4d'>
                        <div style={{width : '100%', height : 'auto'}}>
                            <Image 
                                src='/images/crated-1.jpg'
                                alt="Example image" 
                                fill
                            />
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    );
}