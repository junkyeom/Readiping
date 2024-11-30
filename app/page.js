import "./globals.css";
import Image from "next/image";
import IndividualIntervalsExample from "./home/carousel";

export default function Home() {


  return (
  <div>
    <div id='wrapper'>
      <IndividualIntervalsExample/>
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
    <footer>
      JPAK
    </footer>
  </div>
  )
}
 ';plkmjnh vbn,l;kjhbvpokjn6'