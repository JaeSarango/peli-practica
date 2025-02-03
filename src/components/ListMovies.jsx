import { useEffect } from "react";
import useMovies from "../hooks/useMovies";

const ListMovies = () => {
  const { movies, getMovies } = useMovies();

  // useEffect(() => {
  //   getMovies("Batman");
  // }, []);

  // if (!movies) return <p>Loading...</p>;

  return (
    <div className=" w-full grid  grid-cols-3  justify-between ">
      {movies?.Search?.map((movie) => (
        <div key={movie?.imdbID}>
          <p>{movie?.Title.slice(0, 10)}</p>
          <img className="rounded-2xl" src={movie?.Poster} />
        </div>
      ))}
    </div>
  );
};

export default ListMovies;

// const nombre = (movie) => {
//   console.log("hola")
// }

// (movie) => {
//   console.log("hola")
// }

// movie=>(<p>hola<</p>)
