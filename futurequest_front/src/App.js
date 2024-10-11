import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Hero from "./unused/Hero";
import RecentVideos from "./unused/RecentVideos";
import SocialFeed from "./unused/SocialFeed";
import Footer from "./unused/Footer";
import ApplicationForm from "./components/ApplicationForm";
import Profile from "./components/Profile";
import Offers from "./components/Offers";
import OfferDetails from "./components/OfferDetails";
import Work from "./components/Work";
import Education from "./components/Education";
import Free from "./unused/Free";
import { AuthProvider } from "./AuthContext";
import SignUpForm from "./components/SignUpForm";
import LoginForm from "./components/LoginForm";
import PrivateRoute from "./PrivateRoute";
import Logout from "./components/Logout";
import Home from "./components/Home";
import { OffersProvider } from "./OffersContext";
import { useOffers } from "./OffersContext";

function AppContent() {
  const { darkMode } = useOffers();
  return (
    <div className={`App flex flex-col ${darkMode ? "dark" : ""}`}>
      <Header />
      <main className="mt-14 dark:bg-slate-950">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route element={<PrivateRoute />}>
            <Route path="/profile" element={<Profile />} />
            <Route path="/logout" element={<Logout />} />
            <Route path="/apply" element={<ApplicationForm />} />
          </Route>
          <Route path="/offers" element={<Offers />} />
          <Route path="/login" element={<LoginForm />} />
          <Route path="/register" element={<SignUpForm />} />
          <Route path="/offer-details/:id/" element={<OfferDetails />} />
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
      <OffersProvider>
        <Router>
          <AppContent />
        </Router>
      </OffersProvider>
    </AuthProvider>
  );
}

export default App;
