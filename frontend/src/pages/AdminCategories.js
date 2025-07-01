import React, { useState, useEffect } from 'react';
import { getAllCategories, createCategory, updateCategory, deleteCategory } from '../services/category.service';

const AdminCategories = () => {
  const [categories, setCategories] = useState([]);
  const [formData, setFormData] = useState({
    name: ''
  });
  const [editingId, setEditingId] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchCategories();
  }, []);

  const fetchCategories = async () => {
    try {
      const data = await getAllCategories();
      setCategories(data || []);
      setError(null);
    } catch (error) {
      console.error('Error fetching categories:', error);
      setError('Erreur lors de la récupération des catégories');
      setCategories([]);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (editingId) {
        await updateCategory(editingId, formData);
      } else {
        await createCategory(formData);
      }
      setFormData({ name: '' });
      setEditingId(null);
      setError(null);
      await fetchCategories();
    } catch (error) {
      console.error('Error saving category:', error);
      setError('Erreur lors de la sauvegarde de la catégorie');
    }
  };

  const handleEdit = (category) => {
    setFormData({
      name: category.name
    });
    setEditingId(category.id);
    setError(null);
  };

  const handleDelete = async (id) => {
    try {
      await deleteCategory(id);
      await fetchCategories();
      setError(null);
    } catch (error) {
      console.error('Error deleting category:', error);
      setError('Erreur lors de la suppression de la catégorie');
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">Gérer les Catégories</h1>
        
        {error && (
          <div className="bg-red-600 text-white p-4 rounded-lg mb-6">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="mb-8">
          <div className="flex gap-4">
            <input
              type="text"
              name="name"
              placeholder="Nom de la catégorie"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="flex-grow bg-gray-800 text-white px-6 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
              required
            />
            <button 
              type="submit" 
              className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg transition duration-300 whitespace-nowrap"
            >
              {editingId ? 'Mettre à jour' : 'Ajouter une catégorie'}
            </button>
          </div>
        </form>

        <div className="space-y-4">
          {categories.map((category) => (
            <div 
              key={category.id} 
              className="flex justify-between items-center bg-gray-800 p-4 rounded-lg"
            >
              <h2 className="text-xl font-semibold">{category.name}</h2>
              <div className="flex space-x-2">
                <button
                  onClick={() => handleEdit(category)}
                  className="bg-gray-600 hover:bg-gray-700 text-white px-4 py-2 rounded-lg transition duration-300"
                >
                  Modifier
                </button>
                <button
                  onClick={() => handleDelete(category.id)}
                  className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg transition duration-300"
                >
                  Supprimer
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AdminCategories; 