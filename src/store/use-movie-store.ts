import { create } from 'zustand';

interface Movie {
  id: number;
  title: string;
  posterUrl: string;
  watched: boolean;
}

interface MovieStore {
  movies: Movie[];
  addMovie: (movie: Movie) => void;
  removeMovie: (id: number) => void;
}

export const useMovieStore = create<MovieStore>((set) => ({
  movies: [],
  addMovie: (movie) =>
    set((state) => ({
      movies: [...state.movies, movie],
    })),
  removeMovie: (id) =>
    set((state) => ({
      movies: state.movies.filter((m) => m.id !== id),
    })),
}));
