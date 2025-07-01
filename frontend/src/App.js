import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import HomePage from './pages/HomePage';
import CategoryPage from './pages/CategoryPage';
import AdminMovies from './pages/AdminMovies';
import AdminCategories from './pages/AdminCategories';
import './App.css';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <Router>
      <div className="min-h-screen bg-gray-900">
        <nav className="bg-black bg-opacity-90 fixed w-full z-50">
          <div className="container mx-auto px-4">
            <div className="flex justify-between items-center h-16">
              <div className="flex items-center">
                <Link to="/" className="text-red-600 text-2xl font-bold">
                  NETFLIX BAS DE GAMME
                </Link>
              </div>

              {/* Mobile menu button */}
              <div className="md:hidden">
                <button
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                  className="text-gray-300 hover:text-white focus:outline-none"
                >
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    {isMenuOpen ? (
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    ) : (
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                    )}
                  </svg>
                </button>
              </div>

              {/* Desktop menu */}
              <div className="hidden md:flex space-x-8">
                <Link to="/" className="text-gray-300 hover:text-white transition duration-300">
                  Home
                </Link>
                <Link to="/admin/movies" className="text-gray-300 hover:text-white transition duration-300">
                  Gérer les films
                </Link>
                <Link to="/admin/categories" className="text-gray-300 hover:text-white transition duration-300">
                  Gérer les catégories
                </Link>
              </div>
            </div>

            {/* Mobile menu */}
            <div className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'} pb-4`}>
              <div className="flex flex-col space-y-4">
                <Link
                  to="/"
                  className="text-gray-300 hover:text-white transition duration-300"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Home
                </Link>
                <Link
                  to="/admin/movies"
                  className="text-gray-300 hover:text-white transition duration-300"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Gérer les films
                </Link>
                <Link
                  to="/admin/categories"
                  className="text-gray-300 hover:text-white transition duration-300"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Gérer les catégories
                </Link>
              </div>
            </div>
          </div>
        </nav>

        <main className="pt-16">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/category/:id" element={<CategoryPage />} />
            <Route path="/admin/movies" element={<AdminMovies />} />
            <Route path="/admin/categories" element={<AdminCategories />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
