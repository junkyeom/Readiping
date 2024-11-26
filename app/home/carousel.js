'use client'

import 'bootstrap/dist/css/bootstrap.css'
import './main.css'
import Carousel from 'react-bootstrap/Carousel';
import Image from "next/image";
import Link from 'next/link';

export default function IndividualIntervalsExample() {
    return (
      <div>
        <Carousel>    
            <Carousel.Item interval={1000}>
                <Link href='/detail/6745b48198ab287bdc50dfa5'>
                    <div className='crsl-item'>
                        <Image
                            src="/images/c-1.jpg"
                            layout="fill"
                            objectFit="cover"
                        />
                    </div>
                    <Carousel.Caption>
                        <p className='crsl-title'>애서가들의 독서 커뮤니티, READIPING</p>
                        <p className='crsl-sub'>2024. 12. 20 GRAND OPEN</p>
                    </Carousel.Caption>
                </Link>
            </Carousel.Item>
            <Carousel.Item interval={500}>
            <a href='https://www.youtube.com/watch?v=5f1qDvQsMh8'>
            <div className='crsl-item'>
                <Image
                    src="/images/c-2.webp"
                    layout="fill"
                    objectFit="cover"
                />
            </div>
            <Carousel.Caption>
                <p className='crsl-title'>박제가 되어버린 천재를 아시오?</p>
                <p className='crsl-sub'>이상의 '날개' 모더니즘 해석</p>
            </Carousel.Caption>
            </a>
            </Carousel.Item>
            <Carousel.Item>
            <a href='https://www.megastudy.net/teacher_v2/chr/lecture_detailview.asp?CHR_CD=53689&MAKE_FLG=&tec_cd=megabori'>
            <div className='crsl-item'>
                <Image
                    src="/images/c-3.jpg"
                    layout="fill"
                    objectFit="cover"
                />
            </div>
            <Carousel.Caption>
                <p className='crsl-title'>강기분 완강하고 국어 만점 쟁취하자</p>
                <p className='crsl-sub'>
                제발 수험생이면 강기분 완강합시다
                </p>
            </Carousel.Caption>
            </a>
            </Carousel.Item>
        </Carousel>
      </div>
    );
  }