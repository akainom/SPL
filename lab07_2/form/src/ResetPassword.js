import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const ResetPassword = () => {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const validate = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email) {
      setError('Email is required');
      return false;
    }
    if (!emailRegex.test(email)) {
      setError('Invalid email format');
      return false;
    }
    const users = JSON.parse(localStorage.getItem('users')) || [];
    if (!users.find(u => u.email == email)) {
      setError('Email not exists');
      return false;
    }
    return true;
  };

  const handleSubmit = (e) => {
  e.preventDefault();
  if (!validate()) return;

  const newPassword = Math.random().toString(36).slice(-8); // Генерация пароля
  const users = JSON.parse(localStorage.getItem('users')) || []; // Получаем всех пользователей

  const userIndex = users.findIndex(u => u.email === email);

  if (userIndex === -1) {
    setError('Пользователь с таким email не найден');
    setTimeout(() => setError(''), 5000);
    return;
  }

  const updatedUsers = [...users];
  updatedUsers[userIndex] = {
    ...updatedUsers[userIndex],
    password: newPassword
  };

  localStorage.setItem('users', JSON.stringify(updatedUsers));

  setSuccess(`Новый пароль: ${newPassword}`);
  setTimeout(() => setSuccess(''), 5000);
};

  return (
    <div className="form-container">
      <h2>Reset Password</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Email:</label>
          <input
            style={{ border: error && '1px solid red' }}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          {error && <span className="error">{error}</span>}
        </div>
        <button type="submit">Reset Password</button>
        {success && <div className="success">{success}</div>}
        <Link to="/sign-in">Back to Login</Link>
      </form>
    </div>
  );
};

export default ResetPassword;