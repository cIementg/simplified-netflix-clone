import React, { useState, useEffect } from 'react';
import { getAllMovies, createMovie, updateMovie, deleteMovie } from '../services/movie.service';
import { getAllCategories } from '../services/category.service';

const AdminMovies = () => {
  const [movies, setMovies] = useState([]);
  const [categories, setCategories] = useState([]);
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    imageUrl: '',
    categoryId: ''
  });
  const [editingId, setEditingId] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [moviesData, categoriesData] = await Promise.all([
          getAllMovies(),
          getAllCategories()
        ]);
        setMovies(moviesData);
        setCategories(categoriesData);
      } catch (error) {
        console.error('Erreur', error);
      }
    };
    fetchData();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const resetForm = () => {
    setFormData({ title: '', description: '', imageUrl: '', categoryId: '' });
    setEditingId(null);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const movieData = {
        title: formData.title,
        description: formData.description,
        imageUrl: formData.imageUrl,
        category: categories.find(cat => cat.id === parseInt(formData.categoryId))
      };
      
      if (editingId) {
        await updateMovie(editingId, movieData);
      } else {
        await createMovie(movieData);
      }
      
      const updatedMovies = await getAllMovies();
      setMovies(updatedMovies);
      resetForm();
    } catch (error) {
      console.error('Erreur pendant la sauvegarde', error);
    }
  };

  const handleEdit = (movie) => {
    setFormData({
      title: movie.title,
      description: movie.description,
      imageUrl: movie.imageUrl || '',
      categoryId: movie.category?.id || ''
    });
    setEditingId(movie.id);
  };

  const handleDelete = async (id) => {
    try {
      await deleteMovie(id);
      setMovies(movies.filter(movie => movie.id !== id));
    } catch (error) {
      console.error('Erreur pendant la suppression', error);
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">Gérer les Films</h1>
        
        <form onSubmit={handleSubmit} className="mb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-4">
              <input
                type="text"
                name="title"
                placeholder="Titre"
                value={formData.title}
                onChange={handleChange}
                className="input w-full"
                required
              />
              <textarea
                name="description"
                placeholder="Description"
                value={formData.description}
                onChange={handleChange}
                className="input w-full"
                rows="4"
                required
              />
              <input
                type="url"
                name="imageUrl"
                placeholder="URL de l'image"
                value={formData.imageUrl}
                onChange={handleChange}
                className="input w-full"
              />
              <select
                name="categoryId"
                value={formData.categoryId}
                onChange={handleChange}
                className="input w-full"
                required
              >
                <option value="">Sélectionner une catégorie</option>
                {categories.map(category => (
                  <option key={category.id} value={category.id}>
                    {category.name}
                  </option>
                ))}
              </select>
              <button type="submit" className="btn btn-primary w-full">
                {editingId ? 'Mettre à jour' : 'Ajouter un film'}
              </button>
            </div>
            <div className="flex items-center justify-center bg-gray-800 rounded-lg overflow-hidden">
              {formData.imageUrl ? (
                <img
                  src={formData.imageUrl}
                  alt="Aperçu"
                  className="max-w-full max-h-[400px] object-contain"
                  onError={(e) => {
                    e.target.src = 'https://via.placeholder.com/400x600?text=Image+non+disponible';
                  }}
                />
              ) : (
                <div className="text-gray-500 text-center p-8">
                  <p>Aperçu de l'image</p>
                  <p className="text-sm">Entrez une URL d'image pour voir l'aperçu</p>
                </div>
              )}
            </div>
          </div>
        </form>

        <div className="grid grid-cols-1 gap-4">
          {movies.map(movie => (
            <div key={movie.id} className="card p-4 flex flex-col md:flex-row gap-4">
              <div className="w-full md:w-48 h-48 flex-shrink-0">
                <img
                  src={movie.imageUrl || 'https://via.placeholder.com/400x600?text=Image+non+disponible'}
                  alt={movie.title}
                  className="w-full h-full object-cover rounded-lg"
                  onError={(e) => {
                    e.target.src = 'https://via.placeholder.com/400x600?text=Image+non+disponible';
                  }}
                />
              </div>
              <div className="flex-grow">
                <h2 className="text-xl font-semibold">{movie.title}</h2>
                <p className="text-gray-400 mb-2">{movie.description}</p>
                <p className="text-sm text-gray-500 mb-4">
                  Catégorie: {movie.category?.name || 'Non catégorisé'}
                </p>
                <div className="flex space-x-2">
                  <button
                    onClick={() => handleEdit(movie)}
                    className="btn btn-secondary"
                  >
                    Modifier
                  </button>
                  <button
                    onClick={() => handleDelete(movie.id)}
                    className="btn bg-red-600 hover:bg-red-700"
                  >
                    Supprimer
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AdminMovies; 