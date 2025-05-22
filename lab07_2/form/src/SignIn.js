import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const SignIn = () => {
  const [formData, setFormData] = useState({
    email: 'test@test.com',
    password: 'test'
  });
  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const validate = () => {
    const newErrors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = 'Invalid email format';
    }
    if (!formData.password) {
      newErrors.password = 'Password is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length == 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      const users = JSON.parse(localStorage.getItem('users')) || [];
      const user = users.find(u => 
        u.email === formData.email && u.password === formData.password
      );
  
      if (user) {
        setSuccess(true);
        setTimeout(() => setSuccess(false), 3000);
        setFormData({ email: '', password: '' });
      } else {
        setErrors({ general: 'Invalid email or password' });
      }
    }
  };

  return (
    <div className="form-container">
      <h2>Sign In</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Email:</label>
          <input
            type="email"
            style={{ border: errors.email && '1px solid red' }}
            value={formData.email}
            onChange={(e) => setFormData({...formData, email: e.target.value})}
          />
          {errors.email && <span className="error">{errors.email}</span>}
        </div>

        <div className="form-group">
          <label>Password:</label>
          <div className="password-input-container">
            <input
              type={showPassword ? 'text' : 'password'}
              style={{ border: errors.password && '1px solid red' }}
              value={formData.password}
              onChange={(e) => setFormData({...formData, password: e.target.value})}
            />
            <button
              type="button"
              className="toggle-password"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? 'Hide' : 'Show'}
            </button>
          </div>
          {errors.password && <span className="error">{errors.password}</span>}
        </div>

        {errors.general && <div className="error">{errors.general}</div>}

        <button type="submit" className="submit-btn">Login</button>
        
        {success && <div className="success-message">Login successful!</div>}

        <div className="form-footer-actions">
          <Link to="/sign-up" className="link">Create new account</Link>
          <Link to="/reset-password" className="link">Forgot password?</Link>
        </div>
      </form>
    </div>
  );
};

export default SignIn;