import { Link } from 'react-router-dom';
import logo from '../assets/MasomoLMS-auth.svg';
import './auth.css';

export default function Login() {
  return (
    <div className="auth-container">
      <img src={logo} alt="MasomoLMS Logo" className="auth-logo" />
      <h2>Login</h2>
      <form>
        <div className="auth-form-group">
          <label htmlFor="email">Email Address</label>
          <input type="email" id="email" name="email" placeholder="Enter your email address" />
        </div>
        <div className="auth-form-group">
          <label htmlFor="password">Password</label>
          <input type="password" id="password" name="password" placeholder="Enter your password" />
        </div>
        <button type="submit" className="auth-primary-button">Login</button>
      </form>
      <p>Don&apos;t have an account? <Link to="/sign-up">Sign Up</Link></p>
    </div>
  );
}
