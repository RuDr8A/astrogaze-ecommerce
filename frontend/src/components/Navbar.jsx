import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import { useSelector } from 'react-redux';
import '../styles/navbar.css';

const Navbar = () => {
  const { user, logout } = useContext(AuthContext);
  const cartItems = useSelector((state) => state.cart.cartItems);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <Link to="/">
          <img 
            src="/astrogaze-logo.png" 
            alt="AstroBlaze logo" 
            style={{ 
              height: '36px', 
              width: '36px', 
              borderRadius: '8px', 
              objectFit: 'cover', 
              /* Swapped the orange glow for a stellar purple/blue glow */
              filter: 'drop-shadow(0 2px 8px rgba(139, 92, 246, 0.6))' 
            }} 
          />
          AstroBlaze
        </Link>
      </div>
      <ul className="navbar-links">
        {/* Changed 'Shop' to 'Equipment' for a more niche, premium feel */}
        <li><Link to="/shop">Equipment</Link></li>
        <li><Link to="/cart">Cart ({cartItems.length})</Link></li>
        {user ? (
          <>
            <li><Link to="/profile">Hi, {user.name}</Link></li>
            {/* Thematic change for the admin panel */}
            {user.role === 'admin' && <li><Link to="/admin">Command Center</Link></li>}
            <li><button onClick={handleLogout} className="btn-logout">Logout</button></li>
          </>
        ) : (
          <li><Link to="/login">Login</Link></li>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;