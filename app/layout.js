import "./globals.css";
import Link from 'next/link';
import { getServerSession } from "next-auth";
import { authOptions } from "@/pages/api/auth/[...nextauth]";
import LoginBtn from "./LoginBtn";
import LogoutBtn from "./LogoutBtn";
import Footer from "@/components/footer";

export const metadata = {
  title: 'READPING',
  description: '애서가들의 독서 커뮤니티, READIPING',
  icon: '/favicon.ico',
}

export const viewport = 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no';

export default async function RootLayout({ children }) {

  let session = await getServerSession(authOptions)

  return (
    <html lang="en">
      <body>
        <div className="nvb">
            <div className="nav-left">
              <Link href='/' className="logo">READIPING</Link>
            </div>
            <div className="nav-center">
              <Link href="/reading" className="nav-item">독서포럼</Link>     
              <Link href="/bookclub" className="nav-item">북클럼</Link>
              <Link href="/market" className="nav-item">장터</Link>  
              <Link href="/review" className="nav-item">서평</Link>         
            </div>
            <div className="nav-right">
              {
                session ? 
                <span><span className="accout-symbol material-symbols-outlined">account_circle</span> {session.user.name} <span className="nav-right-menu" style={{marginLeft : '10px'}}><LogoutBtn/></span></span>  
                : <span className="nav-right-menu"><LoginBtn/><span style={{marginLeft : '10px'}}><Link href='/register'>회원가입</Link></span></span>
              }
            </div>
        </div>
        <div className="main-content">
        {children}
        </div>
        <Footer/>
      </body>
    </html>
  );
}


