import Head from "next/head";
// import Image from "next/image"; // 이미지 제거를 위해 주석 처리 또는 삭제
// import { Geist, Geist_Mono } from "next/font/google"; // 전역 폰트 적용으로 불필요
import styles from "@/styles/Home.module.css";

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

export default function HomePage() {
  return (
    <>
      <Head>
        <title>An's Archive</title> {/* 제목 변경 */}
        <meta name="description" content="안's 아카이브에 오신 것을 환영합니다." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        {/* Google Fonts (Playfair Display) 임포트 제거 */}
        {/* <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700&display=swap" rel="stylesheet" /> */}
      </Head>
      <div
        className={styles.page} 
        style={{
          backgroundColor: '#ffffff', // 흰색 배경색으로 변경
          minHeight: 'calc(100vh - 60px)', // Navbar 높이 고려 (대략적인 값)
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          padding: '20px',
        }}
      >
        <main style={{ textAlign: 'center', flexGrow: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
          <h1 style={{
            fontSize: '4.5em',
            color: '#333', // 검정색 계열로 변경
            marginBottom: '10px', // 간격 조정
            letterSpacing: 'normal',
            fontFamily: 'sans-serif' // 기본 폰트 사용
          }}>
            An's Archive
          </h1>
          {/* 부제목 제거 */}
          {/* <p style={{ fontSize: '1.5em', color: '#555', marginBottom: '40px' }}>
            매일매일 달콤한 행복을 선물하는, 당신의 일상 속 작은 사치.
          </p> */}

          {/* <Image
            src="/image/IV1-설명서 디자인_2-01.png" 
            alt="IV1-설명서 디자인_2-01"
            width={800}
            height={500}
            priority
            style={{ borderRadius: '0', boxShadow: 'none', marginTop: '40px' }}
          /> */} {/* 사진 제거 */}
        </main>
        <footer style={{ color: '#555', fontSize: '0.9em', marginTop: '40px' }}>
          <p>© 2025 An's Archive. All rights reserved.</p>
        </footer>
      </div>
    </>
  );
}
