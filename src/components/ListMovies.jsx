import  useMovieStore  from "../store/movieStore";

const ListMovies = () => {
  const { movies } = useMovieStore();
  // console.log(movies);  

  if (!movies) return <p>Loading...</p>;

  return (
    <div className="w-full grid grid-cols-3 justify-between">
      {movies?.length > 0 ? (
        movies.map((movie) => (
          <div key={movie?.imdbID}>

            <p>{movie?.Title?.slice(0, 10)}{movie?.Title?.length > 10 ? "..." : ""}</p>
            <img className="rounded-2xl" src={movie?.Poster} alt={movie?.Title} />
          </div>
        ))
      ) : (
        <p>No se encontraron películas.</p>
      )}
    </div>
  );
};

export default ListMovies;
