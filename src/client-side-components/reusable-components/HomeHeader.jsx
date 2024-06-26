import { Link } from 'react-router-dom';
import logo from '../../assets/MasomoLMS-white.svg';

export default function HomeHeader() {
  return (
    <header className="header">
      <div className="logo-container">
        <img src={logo} alt="Logo" className="logo" />
      </div>
      <nav className="nav">
        <ul className="nav-list">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/my-courses">My Courses</Link></li>
          <li><Link to="/profile">Profile</Link></li>
          <li><Link to="/about-us">About Us</Link></li>
          <li><Link to="/contact-us">Contact Us</Link></li>
          <li><Link to="/admin">Teacher&apos;s Portal</Link></li>
        </ul>
      </nav>
      <div className="logout-container">
        <Link to="/login" className="logout-button">Logout</Link>
      </div>
    </header>
  );
}
