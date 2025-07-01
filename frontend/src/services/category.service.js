import api from './api.config';

export const getAllCategories = () => {
  return api.get('/categories');
};

export const getCategoryById = (id) => {
  return api.get(`/categories/${id}`);
};

export const createCategory = (categoryData) => {
  return api.post('/categories', categoryData);
};

export const updateCategory = (id, categoryData) => {
  return api.put(`/categories/${id}`, categoryData);
};

export const deleteCategory = (id) => {
  return api.delete(`/categories/${id}`);
}; 