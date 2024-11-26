'use client'

import 'bootstrap/dist/css/bootstrap.css'
import '/main.css'
import Carousel from 'react-bootstrap/Carousel';
import Image from "next/image";

export default function IndividualIntervalsExample() {
    return (
      <div>
        <Carousel>
            <Carousel.Item interval={1000}>
            <div style={{ position: 'relative', width: '100%', paddingBottom: '40%' }}>
                <Image
                    src="/images/c-1.jpg"
                    layout="fill"
                    objectFit="cover"
                />
            </div>
            <Carousel.Caption>
                <h3 className='crsl-title'>애서가들의 독서 커뮤니티, READIPING</h3>
                <p className='crsl-sub'>2024. 12. 20 GRAND OPEN</p>
            </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={500}>
            <div style={{ position: 'relative', width: '100%', paddingBottom: '40%' }}>
                <Image
                    src="/images/c-2.webp"
                    layout="fill"
                    objectFit="cover"
                />
            </div>
            <Carousel.Caption>
                <h3 className='crsl-title'>박제가 되어버린 천재를 아시오?</h3>
                <p className='crsl-sub'>천재 시인 이상에 대하여</p>
            </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
            <div style={{ position: 'relative', width: '100%', paddingBottom: '40%' }}>
                <Image
                    src="/images/c-3.jpg"
                    layout="fill"
                    objectFit="cover"
                />
            </div>
            <Carousel.Caption>
                <h3 className='crsl-title'>강기분 완강하고 국어 만점 쟁취하자</h3>
                <p className='crsl-sub'>
                제발 수험생이면 강기분 완강합시다
                </p>
            </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
      </div>
    );
  }