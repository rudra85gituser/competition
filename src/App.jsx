
import './App.css';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';

import AppBar from './pages/Appbar.jsx';  // Import AppBar component
import LoginButton from './pages/Login.jsx';
import LogoutButton from './pages/Logout.jsx';

import SellerForm from "./part1/Seller.jsx";
import VendorForm from "./part1/Vendor.jsx";
import SellerOLXForm from "./part2/Seller.jsx";
import BuyerOLXForm from "./part2/Buyer.jsx";

import Home from "./pages/HomeOptions.jsx"
import Hero from "./pages/Hero.jsx";


function App() {
  const { isAuthenticated } = useAuth0();
  return (
    <Router>
      <>
        <AppBar />
        <div>
          <Routes>
           
          <Route
              path="/"
              element={isAuthenticated ? <Navigate to="/home" replace /> : <Hero />}
            />
            <Route path="/home" element={isAuthenticated ? <Home /> : <Navigate to="/" replace />} />
            <Route path="/login" element={<LoginButton />} />
            <Route path="/logout" element={<LogoutButton />} />
            <Route path="/part1/seller" element={<SellerForm />} />
            <Route path="/part1/vendor" element={<VendorForm />} />
            <Route path="/part2/seller" element={<SellerOLXForm />} />
            <Route path="/part2/buyer" element={<BuyerOLXForm />} />
            
          </Routes>
        </div>
      </>
    </Router>
  );
}

export default App;
