// frontend/src/pages/RegisterForm.js

import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'; // أضفنا useNavigate هنا
import './RegisterForm.css';
import axios from 'axios';

const UserIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
);
const MailIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
);
const LockIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>
);
const EyeIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8s1.08-2.6 3.06-4.94M9.91 4.54A8.77 8.77 0 0 1 12 4c7 0 11 8 11 8s-.94 1.83-3 3.61M12 10a2 2 0 1 0 0 4 2 2 0 0 0 0-4zM2 2l20 20"></path></svg>
);

const RegisterForm = () => {
  const navigate = useNavigate(); // لتغيير الصفحة برمجياً

  const [accountType, setAccountType] = useState('admin');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert("Erreur: Les mots de passe ne correspondent pas !");
      return;
    }

    try {
      // استخدمنا axios للتواصل مع الباكاند
      const response = await axios.post('http://localhost:8080/api/auth/signup', {
        username: name,
        email: email,
        password: password,
        role: accountType.toUpperCase() // 'ADMIN' أو 'USER'
      });

      if (response.status === 200 || response.status === 201) {
        alert("Inscription réussie !");
        navigate('/home'); // التوجه لصفحة الـ Home فوراً
      }
    } catch (error) {
      console.error("Erreur de connexion:", error);
      if (error.response) {
        alert("Erreur: " + error.response.data);
      } else {
        alert("Le serveur ne répond pas (Vérifiez si Spring Boot est lancé)");
      }
    }
  };

  return (
      <div className="register-container">
        <div className="register-form-box">
          <div className="logo-container">
            <span className="logo-don">Don</span>
            <span className="logo-eat">Eat</span>
          </div>

          <h2 className="register-subtitle">Create an {accountType} account</h2>

          <form onSubmit={handleSubmit} className="register-form">
            <div className="role-selector">
              <button
                  type="button"
                  className={`role-button ${accountType === 'admin' ? 'active' : ''}`}
                  onClick={() => setAccountType('admin')}
              >
                Admin
              </button>
              <button
                  type="button"
                  className={`role-button ${accountType === 'user' ? 'active' : ''}`}
                  onClick={() => setAccountType('user')}
              >
                User
              </button>
            </div>

            <div className="input-group">
              <div className="input-icon-box"><UserIcon /></div>
              <input
                  type="text"
                  placeholder="Enter your name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
              />
            </div>

            <div className="input-group">
              <div className="input-icon-box"><MailIcon /></div>
              <input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
              />
            </div>

            <div className="input-group password-group">
              <div className="input-icon-box"><LockIcon /></div>
              <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
              />
              <button type="button" className="password-toggle" onClick={() => setShowPassword(!showPassword)}>
                <EyeIcon />
              </button>
            </div>

            <div className="input-group password-group">
              <div className="input-icon-box"><LockIcon /></div>
              <input
                  type={showConfirmPassword ? "text" : "password"}
                  placeholder="Confirm Password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  required
              />
              <button type="button" className="password-toggle" onClick={() => setShowConfirmPassword(!showConfirmPassword)}>
                <EyeIcon />
              </button>
            </div>

            <button type="submit" className="register-button">Sign up</button>

            <p className="login-text">
              Do you have an account ?
              <Link to="/login" className="login-link"> login</Link>
            </p>
          </form>
        </div>
      </div>
  );
};

export default RegisterForm;