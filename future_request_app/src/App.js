import React from 'react';
import './App.css'
import Header from './components/Header';
import Hero from './components/Hero';
import FeaturedProducts from './components/FeaturedProducts';
import RecentVideos from './components/RecentVideos';
import SocialFeed from './components/SocialFeed';
import Footer from './components/Footer';
import AuthForm from './components/AuthForm';
import ApplicationForm from './components/ApplicationForm';
import Profile from './components/Profile';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Hero />
        <FeaturedProducts />
        <RecentVideos />
        <SocialFeed />
        <AuthForm />
      </main>
      <Footer />
      <ApplicationForm />
      <Profile />
    </div>
  );
}

export default App;