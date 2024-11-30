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
            <Carousel.Item interval={5000}>
                <Link href='/detail/6745b48198ab287bdc50dfa5'>
                    <div className='crsl-item'>
                        <Image
                            src="/images/c-1.jpg"
                            alt="book"
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
            <Carousel.Item interval={5000}>
            <a href='https://www.youtube.com/watch?v=9JW8ijjz9sU'>
            <div className='crsl-item'>
                <Image
                    src="/images/c-2.png"
                    alt="wings"
                    layout="fill"
                    objectFit="cover"
                />
            </div>
            <Carousel.Caption>
                <p className='crsl-title'>'악의 평범성'에 대한 보고서</p>
                <p className='crsl-sub'>설민석이 읽어주는 &lt;예루살렘의 아이히만&gt;</p>
            </Carousel.Caption>
            </a>
            </Carousel.Item>
            <Carousel.Item interval={5000}>
            <a href='https://www.megastudy.net/teacher_v2/chr/lecture_detailview.asp?CHR_CD=53689&MAKE_FLG=&tec_cd=megabori'>
            <div className='crsl-item'>
                <Image
                    src="/images/c-3.jpg"
                    alt="Kangmincheol"
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