
import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const NavBar: React.FC = () => {
  const location = useLocation();
  
  const isActive = (path: string) => {
    return location.pathname === path ? 'bg-green-700 text-white' : 'bg-green-600 hover:bg-green-700 text-white';
  };

  return (
    <nav className="fixed top-0 left-0 right-0 bg-green-800 shadow-lg z-40">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-center items-center h-16">
          <div className="flex space-x-4">
            <Link 
              to="/" 
              className={`px-5 py-2 rounded-md text-md font-medium transition-colors ${isActive('/')}`}
            >
              Главная
            </Link>
            <Link 
              to="/wisdom" 
              className={`px-5 py-2 rounded-md text-md font-medium transition-colors ${isActive('/wisdom')}`}
            >
              Мудрость из болота
            </Link>
            <Link 
              to="/gift" 
              className={`px-5 py-2 rounded-md text-md font-medium transition-colors ${isActive('/gift')}`}
            >
              Подарок
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
