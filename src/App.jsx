import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import LoginForm from './components/LoginForm';
import OTPForm from './pages/password'; 
import './App.css';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/login" element={<LoginForm />} />
        
        {/* Changed path from a file string to a clean URL path */}
        <Route path="/password" element={<OTPForm />} />
      </Routes>
    </Router>
  );
}