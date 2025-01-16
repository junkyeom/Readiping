import "./globals.css";
import Image from "next/image";
import IndividualIntervalsExample from "./home/carousel";
import HotPost from "./home/hotpost";
import Curated from "./home/curated";
import PreReading from "./home/prereading";

export default function Home() {


  return (
  <div id='wrapper'>
    <div>
      <IndividualIntervalsExample/>
    </div>
    <div id='inner-container'>
      <div className="title-curated">
        <span>CURATED</span>
      </div>
      <div id="curated-container">
        <Curated/>
      </div>
      <div className="title-community">
        <span>COMMUNITY</span>
      </div>
      <div id="community-container">
        <HotPost/>
        <PreReading/>
      </div>
      <div id='home-banner'>
        <a href="https://blog.naver.com/hyuna5071/221380780586">
        <Image
          src="/images/banner/home-1.png" 
          alt="description"
          layout="responsive"
          width={1020}
          height={136}
          style={{ borderRadius: '10px' }}
        />
        </a>
      </div>
      <div style={{minHeight: '100px'}}></div>
    </div>
  </div>
  )
}
