import Link from 'next/link';
// import styles from '../styles/DessertStyles.module.css'; // CSS 모듈 임포트 제거

const Navbar = () => {
  return (
    <nav style={navbarStyle}> {/* className 대신 style 적용 */}
      <ul style={ulStyle}>
        <li style={liStyle}>
          <Link href="/" style={linkStyle}>
            Home
          </Link>
        </li>
        <li style={liStyle}>
          <Link href="/about" style={linkStyle}>
            About
          </Link>
        </li>
        <li style={liStyle}>
          <Link href="/portfolio" style={linkStyle}>
            Portfolio
          </Link>
        </li>
      </ul>
    </nav>
  );
};

const navbarStyle = {
  backgroundColor: '#f0f0f0',
  padding: '10px 20px',
  borderBottom: '1px solid #ddd',
  display: 'flex',
  justifyContent: 'center',
};

const ulStyle = {
  listStyle: 'none',
  margin: 0,
  padding: 0,
  display: 'flex',
  gap: '20px',
};

const liStyle = {
  display: 'inline',
};

const linkStyle = {
  textDecoration: 'none',
  color: '#333',
  fontWeight: 'bold',
  padding: '5px 10px',
  borderRadius: '5px',
  transition: 'background-color 0.3s ease',
};

export default Navbar;
