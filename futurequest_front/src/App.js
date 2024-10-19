import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import ApplicationForm from "./components/ApplicationForm";
import Profile from "./components/Profile";
import OfferDetails from "./components/OfferDetails";
import Work from "./components/Work";
import Education from "./components/Education";
import { AuthProvider } from "./AuthContext";
import SignUpForm from "./components/SignUpForm";
import LoginForm from "./components/LoginForm";
import PrivateRoute from "./PrivateRoute";
import Logout from "./components/Logout";
import Home from "./components/Home";
import { OffersProvider } from "./OffersContext";
import { useOffers } from "./OffersContext";
import Resource from "./components/Resource";
import AdminPage from "./components/AdminPage";
import AboutUs from "./components/AboutUs";

function AppContent() {
  const { darkMode } = useOffers();
  return (
    <div className={`App ${darkMode ? "dark" : ""}`}>
      <div className="flex flex-col dark:bg-slate-900 bg-white">
        <Header />
        <main className="">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route element={<PrivateRoute />}>
              <Route path="/profile" element={<Profile />} />
              <Route path="/logout" element={<Logout />} />
              <Route path="/apply" element={<ApplicationForm />} />
            </Route>
            {/* <Route path="/admin-login" element={<AdminLoginForm />} /> */}
            <Route path="/admin" element={<AdminPage />} />
            <Route path="/login" element={<LoginForm />} />
            <Route path="/register" element={<SignUpForm />} />
            <Route path="/offer-details/:id/" element={<OfferDetails />} />
            <Route path="/work" element={<Work />} />
            <Route path="/education" element={<Education />} />
            <Route path="/resource" element={<Resource />} />
            <Route path="/about-us" element={<AboutUs />} />
          </Routes>
        </main>
      </div>
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
