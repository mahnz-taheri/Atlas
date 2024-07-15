import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const HomePage = () => {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const navigate = useNavigate();

  const goToLogin = () => {
    navigate('/login');
  };

  return (
    <div>
      <h1>Home Page</h1>
      {isAuthenticated ? (
        <p>Welcome! You are logged in.</p>
      ) : (
        <button onClick={goToLogin}>Go to Login</button>
      )}
    </div>
  );
};

export default HomePage;


