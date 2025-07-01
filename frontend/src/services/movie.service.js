import api from './api.config';

export const getAllMovies = () => {
  return api.get('/movies');
};

export const getMoviesByCategory = (categoryId) => {
  return api.get(`/movies/category/${categoryId}`);
};

export const createMovie = (movieData) => {
  return api.post('/movies', movieData);
};

export const updateMovie = (id, movieData) => {
  return api.put(`/movies/${id}`, movieData);
};

export const deleteMovie = (id) => {
  return api.delete(`/movies/${id}`);
};

export const getMovieById = (id) => {
  return api.get(`/movies/${id}`);
};