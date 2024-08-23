import React from 'react';
import './App.css'
import Header from './components/Header';
import Hero from './components/Hero';
import FeaturedProducts from './components/FeaturedProducts';
import RecentVideos from './components/RecentVideos';
import SocialFeed from './components/SocialFeed';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Hero />
        <FeaturedProducts />
        <RecentVideos />
        <SocialFeed />
      </main>
      <Footer />
    </div>
  );
}

export default App;