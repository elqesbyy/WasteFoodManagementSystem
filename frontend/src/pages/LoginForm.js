import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Mail, Lock, LogIn } from 'lucide-react';
import './LoginForm.css';

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
        alert("Welcome back!");
        localStorage.setItem('user', JSON.stringify(response.data));

        if (response.data.role === 'ADMIN') {
          navigate('/admin-dashboard');
        } else {
          navigate('/home');
        }
      }
    } catch (error) {
      alert("Invalid email or password. Please try again.");
    }
  };

  return (
      <div className="auth-page">
        <div className="auth-card">
          <div className="auth-logo">
            <span className="don">Don</span><span className="eat">Eat</span>
          </div>

          <div className="auth-header">
            <h2>Welcome Back</h2>
            <p>Log in to continue saving food</p>
          </div>

          <form onSubmit={handleSubmit} className="auth-form">
            <div className="input-field">
              <Mail className="icon" size={20} />
              <input
                  type="email"
                  placeholder="Email Address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
              />
            </div>

            <div className="input-field">
              <Lock className="icon" size={20} />
              <input
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
              />
            </div>

            <button type="submit" className="btn-primary">
              <LogIn size={20} style={{marginRight: '8px'}} />
              Log In
            </button>

            <p className="auth-footer">
              Don't have an account? <Link to="/register" className="link">Sign Up</Link>
            </p>
          </form>
        </div>
      </div>
  );
};

export default LoginForm;