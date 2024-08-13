import React from 'react';
import './App.css';
import Header from './Header';
import Content from './Content';
import Products from './Products';
import VideoSection from './VideoSection';
import Footer from './Footer';

const App = () => (
  <div className="App">
    <Header />
    <Content />
    <Products />
    <VideoSection />
    <Footer />
  </div>
);

export default App;