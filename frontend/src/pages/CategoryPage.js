import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getMoviesByCategory } from '../services/movie.service';
import { getCategoryById } from '../services/category.service';

const CategoryPage = () => {
  const { id } = useParams();
  const [movies, setMovies] = useState([]);
  const [category, setCategory] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const [moviesData, categoryData] = await Promise.all([
          getMoviesByCategory(id),
          getCategoryById(id)
        ]);
        setMovies(moviesData);
        setCategory(categoryData);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-900 text-white flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-red-600"></div>
      </div>
    );
  }

  if (!category) {
    return (
      <div className="min-h-screen bg-gray-900 text-white flex items-center justify-center">
        <div className="text-2xl">Category not found</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-8">
        {/* Category Header */}
        <div className="relative h-64 mb-12 rounded-lg overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-black to-transparent z-10"></div>
          <img
            src={`https://source.unsplash.com/random/1920x1080/?${category.name.toLowerCase()},movie`}
            alt={category.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute bottom-0 left-0 p-8 z-20">
            <h1 className="text-4xl font-bold mb-2">{category.name} Movies</h1>
            <p className="text-xl text-gray-300">
              Discover our collection of {category.name.toLowerCase()} movies
            </p>
          </div>
        </div>

        {/* Movies Grid */}
        {movies.length === 0 ? (
          <div className="text-center text-gray-400 text-xl">
            No movies found in this category
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {movies.map((movie) => (
              <div
                key={movie.id}
                className="bg-gray-800 rounded-lg overflow-hidden transform transition duration-300 hover:scale-105"
              >
                <img
                  src={`https://source.unsplash.com/random/800x600/?movie,${movie.title.toLowerCase()}`}
                  alt={movie.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h2 className="text-xl font-semibold mb-2">{movie.title}</h2>
                  <p className="text-gray-400 text-sm line-clamp-3">
                    {movie.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default CategoryPage; 