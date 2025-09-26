import Head from "next/head";
import React, { useState } from 'react';
// import Image from "next/image"; // Image 컴포넌트 더 이상 사용 안 함
// import { Geist, Geist_Mono } from "next/font/google"; // 전역 폰트 적용으로 불필요
import styles from "@/styles/Home.module.css"; // 기존 Home.module.css는 계속 사용

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

export default function AboutPage() {
  const [isIntroOpen, setIsIntroOpen] = useState(false);
  const [isMissionOpen, setIsMissionOpen] = useState(false);
  const [isDessertOpen, setIsDessertOpen] = useState(false);
  const [isContactOpen, setIsContactOpen] = useState(false);

  return (
    <>
      <Head>
        <title>About Me</title> {/* 제목 변경 */}
        <meta name="description" content="저에 대해 소개합니다." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        {/* Google Fonts (Playfair Display) 임포트 제거 */}
        {/* <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700&display=swap" rel="stylesheet" /> */}
      </Head>
      <div
        className={styles.page} 
        style={{
          backgroundColor: '#ffffff', // 흰색 배경색으로 변경
          minHeight: 'calc(100vh - 60px)', // Navbar 높이 고려
          padding: '20px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <main className={styles.main} style={{ maxWidth: '800px', width: '100%' }}>
          <section style={{ marginBottom: '30px', border: `1px solid #ddd`, borderRadius: '10px', overflow: 'hidden', boxShadow: '0 2px 10px rgba(0,0,0,0.05)' }}>
            <h1 
              onClick={() => setIsIntroOpen(!isIntroOpen)}
              style={{
                cursor: 'pointer',
                backgroundColor: '#f8f8f8',
                color: '#333',
                padding: '15px 20px',
                margin: 0,
                fontSize: '1.8em',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}
            >
              소개 {isIntroOpen ? '▲' : '▼'}
            </h1>
            {isIntroOpen && (
              <p style={{ padding: '20px', lineHeight: '1.6', color: '#555', backgroundColor: '#fff', borderTop: `1px solid #ddd` }}>
                안녕하세요! 저는 N년차 프론트엔드 개발자 [사용자 이름]입니다. 
                다양한 웹 기술을 활용하여 사용자 친화적인 인터페이스를 구축하고 
                성능 최적화에 기여하는 것을 목표로 하고 있습니다.
              </p>
            )}
          </section>

          <section style={{ marginBottom: '30px', border: `1px solid #ddd`, borderRadius: '10px', overflow: 'hidden', boxShadow: '0 2px 10px rgba(0,0,0,0.05)' }}>
            <h2
              onClick={() => setIsMissionOpen(!isMissionOpen)}
              style={{
                cursor: 'pointer',
                backgroundColor: '#f8f8f8',
                color: '#333',
                padding: '15px 20px',
                margin: 0,
                fontSize: '1.5em',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}
            >
              경력 {isMissionOpen ? '▲' : '▼'}
            </h2>
            {isMissionOpen && (
              <div style={{ padding: '20px', lineHeight: '1.6', color: '#555', backgroundColor: '#fff', borderTop: `1px solid #ddd` }}>
                <p><strong>[회사명] (YYYY.MM - YYYY.MM)</strong></p>
                <ul>
                  <li>[담당 업무 및 성과 1]</li>
                  <li>[담당 업무 및 성과 2]</li>
                </ul>
                <p><strong>[회사명] (YYYY.MM - YYYY.MM)</strong></p>
                <ul>
                  <li>[담당 업무 및 성과 1]</li>
                  <li>[담당 업무 및 성과 2]</li>
                </ul>
              </div>
            )}
          </section>

          <section style={{ marginBottom: '30px', border: `1px solid #ddd`, borderRadius: '10px', overflow: 'hidden', boxShadow: '0 2px 10px rgba(0,0,0,0.05)' }}>
            <h2
              onClick={() => setIsDessertOpen(!isDessertOpen)}
              style={{
                cursor: 'pointer',
                backgroundColor: '#f8f8f8',
                color: '#333',
                padding: '15px 20px',
                margin: 0,
                fontSize: '1.5em',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}
            >
              기술 스택 {isDessertOpen ? '▲' : '▼'}
            </h2>
            {isDessertOpen && (
              <ul style={{ padding: '20px 20px 20px 40px', lineHeight: '1.6', color: '#555', backgroundColor: '#fff', borderTop: `1px solid #ddd` }}>
                <li>Frontend: React, Next.js, JavaScript, TypeScript, HTML5, CSS3</li>
                <li>Styling: Styled-components, Tailwind CSS, SASS</li>
                <li>Tools: Git, Webpack, Babel</li>
              </ul>
            )}
          </section>

          <section style={{ marginBottom: '30px', border: `1px solid #ddd`, borderRadius: '10px', overflow: 'hidden', boxShadow: '0 2px 10px rgba(0,0,0,0.05)' }}>
            <h2
              onClick={() => setIsContactOpen(!isContactOpen)}
              style={{
                cursor: 'pointer',
                backgroundColor: '#f8f8f8',
                color: '#333',
                padding: '15px 20px',
                margin: 0,
                fontSize: '1.5em',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}
            >
              Contact {isContactOpen ? '▲' : '▼'}
            </h2>
            {isContactOpen && (
              <div style={{ padding: '20px', lineHeight: '1.6', color: '#555', backgroundColor: '#fff', borderTop: `1px solid #ddd` }}>
                <p>Email: your-email@example.com</p>
                <p>GitHub: <a href="#">your-github-link</a></p>
                <p>LinkedIn: <a href="#">your-linkedin-link</a></p>
              </div>
            )}
          </section>
        </main>
        <footer style={{ color: '#555', fontSize: '0.9em', marginTop: '40px' }}>
          <p>© 2025 An's Archive. All rights reserved.</p>
        </footer>
      </div>
    </>
  );
}
