import "./globals.css";
import Link from 'next/link';
import { getServerSession } from "next-auth";
import { authOptions } from "@/pages/api/auth/[...nextauth]";
import LoginBtn from "./LoginBtn";
import LogoutBtn from "./LogoutBtn";
  

export const metadata = {
  title: "READIPING",
  description: "독서 커뮤니티",
};

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
              <Link href="/reading">독서포럼</Link>     
              <Link href="/bookclub">북클럼</Link>
              <Link href="/market">장터</Link>  
              <Link href="/review">서평</Link>         
            </div>
            <div className="nav-right">
              {
                session ? 
                <span>👤 {session.user.name} <span style={{marginLeft : '10px'}}><LogoutBtn/></span></span>  
                : <span><LoginBtn/><span style={{marginLeft : '10px'}}><Link href='/register'>회원가입</Link></span></span>
              }
            </div>
        </div>
        {children}
      </body>
    </html>
  );
}
