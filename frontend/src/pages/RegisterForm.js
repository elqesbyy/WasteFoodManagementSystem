import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './RegisterForm.css';
import axios from 'axios';
import { User, Mail, Lock, Eye, EyeOff } from 'lucide-react'; // تأكدي من تنصيب lucide-react

const RegisterForm = () => {
  const navigate = useNavigate();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    try {
      const response = await axios.post('http://localhost:8080/api/auth/signup', {
        username: name,
        email: email,
        password: password,
        role: "USER" // تم تثبيت الدور كمستخدم عادي
      });

      if (response.status === 200 || response.status === 201) {
        alert("Account created successfully!");
        navigate('/login');
      }
    } catch (error) {
      alert("Registration failed. Please try again.");
    }
  };

  return (
      <div className="register-page">
        <div className="register-card">
          <div className="auth-logo">
            <span className="don">Don</span><span className="eat">Eat</span>
          </div>

          <div className="auth-header">
            <h2>Create Account</h2>
            <p>Join our community to save food</p>
          </div>

          <form onSubmit={handleSubmit} className="auth-form">
            <div className="input-field">
              <User className="icon" size={20} />
              <input
                  type="text"
                  placeholder="Full Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
              />
            </div>

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
                  type={showPassword ? "text" : "password"}
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
              />
              <button
                  type="button"
                  className="eye-btn"
                  onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>

            <div className="input-field">
              <Lock className="icon" size={20} />
              <input
                  type="password"
                  placeholder="Confirm Password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  required
              />
            </div>

            <button type="submit" className="btn-primary">Sign Up</button>

            <p className="auth-footer">
              Already have an account? <Link to="/login" className="link">Login</Link>
            </p>
          </form>
        </div>
      </div>
  );
};

export default RegisterForm;