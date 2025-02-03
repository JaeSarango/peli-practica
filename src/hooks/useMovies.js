// import { useEffect } from "react";
import { getMoviesService } from "../services/getMoviesService";
import { useState } from "react";

const useMovies = () => {
  const [movies, setMovies] = useState({});
  //   useEffect(() => {
  //     getMovies();
  //   }, []);
  const getMovies = async (peli) => {
    const respuesta = await getMoviesService(peli);
    // respuesta  = res.data
    console.log(respuesta);
    setMovies(respuesta); // console.log(movies);
    return { movies, getMovies };
  };
};

export default useMovies;
