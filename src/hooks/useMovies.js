import useMovieStore from "../store/movieStore";

const useMovies = () => {
  const { setMovies } = useMovieStore();

  const getMovies = async (search) => {
    try {
      await setMovies(search); 
    } catch (error) {
      console.error("Error al obtener películas:", error);
    }

  };

  return { getMovies };
};


export default useMovies;
