import "./globals.css";
import Link from 'next/link';

export const metadata = {
  title: "READIPING",
  description: "책친놈 커뮤니티",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className="navbar">
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
              <span style={{marginRight:'10px'}}>
                로그인
              </span>
            </div>
        </div>
        {children}
      </body>
    </html>
  );
}
