import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import RecentVideos from "./components/RecentVideos";
import SocialFeed from "./components/SocialFeed";
import Footer from "./components/Footer";
import ApplicationForm from "./components/ApplicationForm";
import Profile from "./components/Profile";
import Offers from "./components/Offers";
import OfferDetails from "./components/OfferDetails";
import Work from "./components/Work";
import Education from "./components/Education";
import Free from "./components/Free";
import { AuthProvider } from "./AuthContext";
import SignUpForm from "./components/SignUpForm";
import LoginForm from "./components/LoginForm";
import PrivateRoute from "./PrivateRoute";
import Logout from "./components/Logout";

function AppContent() {
  return (
    <div className="App">
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
          <Route element={<PrivateRoute />}>
            <Route path="profile" element={<Profile />} />
            <Route path="logout" element={<Logout />} />
          </Route>
          <Route path="/students/1" element={<Profile />} />
          <Route path="/offers" element={<Offers />} />
          <Route path="/login" element={<LoginForm />} />
          <Route path="/register" element={<SignUpForm />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/apply" element={<ApplicationForm />} />
          <Route path="/offer-details" element={<OfferDetails />} />
          <Route path="/work" element={<Work />} />
          <Route path="/education" element={<Education />} />
          <Route path="/free" element={<Free />} />
        </Routes>
      </main>
    </div>
  );
}

function App() {
  return (
    <AuthProvider>
      <Router>
        <AppContent />
      </Router>
    </AuthProvider>
  );
}

export default App;
