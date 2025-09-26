import Head from "next/head";
import React, { useState } from 'react'; // useState를 사용하기 위해 import
import Image from "next/image"; // Image 컴포넌트를 사용하기 위해 import
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

// squareBoxStyle은 더 이상 사용하지 않으므로 제거하거나 주석 처리
// const squareBoxStyle = {
//   width: '400px',
//   height: '533px',
//   backgroundColor: 'var(--dessert-cream)',
//   border: '1px solid var(--dessert-pink)',
//   display: 'flex',
//   flexDirection: 'column',
//   justifyContent: 'center',
//   alignItems: 'center',
//   fontSize: '2em',
//   fontWeight: 'bold',
//   color: 'var(--dessert-brown)',
//   borderRadius: '15px',
//   boxShadow: '0 5px 15px rgba(0,0,0,0.1)',
//   transition: 'transform 0.3s ease, box-shadow 0.3s ease',
// };

const IMAGES = Array.from({ length: 12 }, (_, i) => `/image/${i + 1}.png`);

export default function PortfolioPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const openModal = (index) => {
    setCurrentImageIndex(index);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const showNextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % IMAGES.length);
  };

  const showPrevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? IMAGES.length - 1 : prevIndex - 1
    );
  };

  return (
    <>
      <Head>
        <title>Portfolio</title>
        <meta name="description" content="저의 포트폴리오 작업물들을 소개합니다." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        {/* Google Fonts 임포트 제거 */}
        {/* <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700&display=swap" rel="stylesheet" /> */}
      </Head>
      <div
        className={styles.page} 
        style={{
          backgroundColor: '#ffffff', // 흰색 배경색
          minHeight: 'calc(100vh - 60px)',
          padding: '20px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <main className={styles.main} style={{ textAlign: 'center', paddingTop: '20px', maxWidth: '1200px', width: '100%' }}>
          <h1 style={{ textDecoration: 'underline', marginBottom: '50px', fontSize: '3.5em', color: '#333' }}>Portfolio</h1>

          <div style={{ display: 'flex', justifyContent: 'center', gap: '30px', flexWrap: 'wrap' }}>
            {IMAGES.map((imagePath, index) => (
              <div
                key={index}
                onClick={() => openModal(index)}
                style={{
                  cursor: 'pointer',
                  width: '400px',
                  height: '533px',
                  backgroundColor: '#f0f0f0',
                  border: '1px solid #ddd',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  fontSize: '1.5em',
                  fontWeight: 'bold',
                  color: '#666',
                  borderRadius: '8px',
                  boxShadow: '0 2px 5px rgba(0,0,0,0.1)',
                  overflow: 'hidden',
                  position: 'relative',
                }}
              >
                <Image
                  src={imagePath}
                  alt={`작업물 ${index + 1}`}
                  width={400} 
                  height={533} 
                  objectFit="contain" 
                />
                <div style={{ position: 'absolute', bottom: '10px', backgroundColor: 'rgba(255,255,255,0.8)', padding: '5px 10px', borderRadius: '5px' }}>
                  작업물 {index + 1}
                </div>
              </div>
            ))}
          </div>
        </main>
        <footer style={{ color: '#555', fontSize: '0.9em', marginTop: '40px' }}>
          <p>© 2025 An's Archive. All rights reserved.</p>
        </footer>

        {isModalOpen && (
          <div
            style={{
              position: 'fixed',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              backgroundColor: 'rgba(0,0,0,0.8)',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              zIndex: 1000,
            }}
          >
            <button
              onClick={closeModal}
              style={{
                position: 'absolute',
                top: '20px',
                right: '20px',
                backgroundColor: 'white',
                border: 'none',
                borderRadius: '50%',
                width: '40px',
                height: '40px',
                fontSize: '1.5em',
                cursor: 'pointer',
              }}
            >
              X
            </button>
            <button
              onClick={showPrevImage}
              style={{
                position: 'absolute',
                left: '20px',
                backgroundColor: 'white',
                border: 'none',
                borderRadius: '50%',
                width: '40px',
                height: '40px',
                fontSize: '1.5em',
                cursor: 'pointer',
              }}
            >
              &lt;
            </button>
            <div // Image를 감싸는 새로운 div 컨테이너
              style={{
                position: 'relative',
                maxWidth: '90vw',
                maxHeight: '90vh',
                width: 'auto',
                height: 'auto',
                display: 'flex', // 이미지 중앙 정렬을 위해 추가
                justifyContent: 'center', // 이미지 중앙 정렬을 위해 추가
                alignItems: 'center', // 이미지 중앙 정렬을 위해 추가
              }}
            >
              <Image
                src={IMAGES[currentImageIndex]}
                alt={`작업물 ${currentImageIndex + 1}`}
                layout="fill"
                objectFit="contain"
                // style={{ maxWidth: '90vw', maxHeight: '90vh', width: 'auto', height: 'auto' }} // 이 부분 제거
              />
            </div>
            <button
              onClick={showNextImage}
              style={{
                position: 'absolute',
                right: '20px',
                backgroundColor: 'white',
                border: 'none',
                borderRadius: '50%',
                width: '40px',
                height: '40px',
                fontSize: '1.5em',
                cursor: 'pointer',
              }}
            >
              &gt;
            </button>
          </div>
        )}
      </div>
    </>
  );
}
