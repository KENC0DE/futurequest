import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import RecentVideos from "./components/RecentVideos";
import SocialFeed from "./components/SocialFeed";
import Footer from "./components/Footer";
import AuthForm from "./components/AuthForm";
import ApplicationForm from "./components/ApplicationForm";
import Profile from "./components/Profile";
import ProductGrid from "./components/Products";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <main>
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Hero />
                  <RecentVideos />
                  <SocialFeed />
                  <Footer />
                </>
              }
            />
            <Route path="/students/1" element={<Profile />} />
            <Route path="/offers" element={<ProductGrid />} />
            <Route path="/login" element={<AuthForm />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/apply" element={<ApplicationForm />} />
          </Routes>
        </main>
      </Router>
    </div>
  );
}

export default App;