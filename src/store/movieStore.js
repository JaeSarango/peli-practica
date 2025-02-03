import { create } from "zustand";
import { getMoviesService } from "../services/getMoviesService";

const useMovieStore = create((set) => ({
  movies: [],
  setMovies: async (search) => {
    const res = await getMoviesService(search);
    set({ movies: res });
  },
}));

export default useMovieStore; 
