import "./globals.css";
import Image from "next/image";
import IndividualIntervalsExample from "./home/carousel";
import HotPost from "./home/hotpost";
import Curated from "./home/curated";

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
      </div>
      <div id='home-banner'>
        <a href="https://blog.naver.com/hyuna5071/221380780586">
        <Image
          src="/images/banner/home-1.png" 
          alt="description" 
          width={900} 
          height={0}
          layout="intrinsic"
          style={{ borderRadius: '10px' }}
        />
        </a>
      </div>
      <div style={{height:'500px'}}></div>
    </div>
  </div>
  )
}