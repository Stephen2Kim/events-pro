import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './components/HomePage';
import AboutPage from './components/AboutPage';
import EventList from './components/EventList';
import EventDetail from './components/EventDetail';
import LoginPage from './components/LoginPage';
import RegisterPage from './components/RegisterPage';
import UserProfile from './components/UserProfile';
import BookingPage from './components/BookingPage';
import OrderHistory from './components/OrderHistory';
import Settings from './components/Settings';
import ProtectedRoute from './components/ProtectedRoute';

function App() {
  return (
    <>
    <Router>
      <Navbar >
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/events" element={<EventList />} />
        <Route path="/events/:id" element={<EventDetail />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/profile" element={<ProtectedRoute component={UserProfile} />} />
        <Route path="/book" element={<ProtectedRoute component={BookingPage} />} />
        <Route path="/orders" element={<ProtectedRoute component={OrderHistory} />} />
        <Route path="/settings" element={<ProtectedRoute component={Settings} />} />
      </Routes>
      </Navbar>
    </Router>
    <EventDetail/>
    <EventList/>

    </>
  );
}

export default App;
