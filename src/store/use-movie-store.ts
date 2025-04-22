import { create } from 'zustand';

type Movie = {
  id: number;
  title: string;
  posterUrl: string;
  watched: boolean;
};

type MovieStore = {
  movies: Movie[];
  addMovie: (movie: Movie) => void;
  removeMovie: (id: number) => void;
};

export const useMovieStore = create<MovieStore>((set) => ({
  movies: [],
  addMovie: (movie) => set((state) => ({ movies: [movie, ...state.movies] })),
  removeMovie: (id) =>
    set((state) => ({
      movies: state.movies.filter((m) => m.id !== id),
    })),
}));
