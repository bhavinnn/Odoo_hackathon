import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import UserProfile from "./pages/UserProfile"; // ✅ renamed component
        // ✅ editable profile page
import AuthModal from "./components/AuthModal";
import { AuthProvider } from "./context/AuthContext";
import Profile from "./pages/Profile";



function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/user/:id" element={<UserProfile />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
        <AuthModal />
      </Router>
    </AuthProvider>
  );
}

export default App;
