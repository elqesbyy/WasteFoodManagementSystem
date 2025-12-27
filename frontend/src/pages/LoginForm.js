import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios'; // ضروري
import './LoginForm.css';

const MailIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
);
const LockIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>
);

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:8080/api/auth/login', {
        email: email,
        password: password
      });

      if (response.status === 200) {
        alert("Connexion réussie !");
        localStorage.setItem('user', JSON.stringify(response.data));

        // التوجيه حسب الـ Role
        if (response.data.role === 'ADMIN') {
          navigate('/admin-dashboard');
        } else {
          navigate('/home');
        }
      }
    } catch (error) {
      alert("Email ou mot de passe incorrect");
    }
  };

  return (
      <div className="login-container">
        <div className="login-form-box">
          <div className="logo-container">
            <span className="logo-don">Don</span><span className="logo-eat">Eat</span>
          </div>
          <h2 className="login-title">Login Form</h2>
          <form onSubmit={handleSubmit} className="login-form">
            <div className="input-group">
              <div className="input-icon-box"><MailIcon /></div>
              <input type="email" placeholder="Enter Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
            </div>
            <div className="input-group">
              <div className="input-icon-box"><LockIcon /></div>
              <input type="password" placeholder="Enter Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
            </div>
            <button type="submit" className="login-button">Log in</button>
            <p className="signup-text">
              Don't have an account ? <Link to="/register" className="signup-link">Sign up</Link>
            </p>
          </form>
        </div>
      </div>
  );
};

export default LoginForm;