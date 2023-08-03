import SearchIcon from "./search.svg";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { setMovieName } from "./store";
import { useGetMovie } from "./useGetMovie";
import { MovieCard } from "./MovieCard";

export const Movie = () => {
  const dispatch = useDispatch();
  const { movies, isMovieLoading, handleSearch } = useGetMovie();

  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div className="app">
      <h1>MOVIES HUB</h1>
      <div className="search">
        <input
          placeholder="search for movies...."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <img
          src={SearchIcon}
          alt="search"
          onClick={() => {
            dispatch(setMovieName({ movieName: searchTerm }));
            handleSearch();
          }}
        />
      </div>
      {isMovieLoading ? (
        <div className="empty">
          <h2>Loading..........</h2>
        </div>
      ) : movies?.length > 0 ? ( // Use optional chaining operator here
        <div className="container">
          {movies.map((m) => (
            <MovieCard key={m.imdbID} movie={m} />
          ))}
        </div>
      ) : (
        <div className="empty">
          <h2>No movies found</h2>
        </div>
      )}
    </div>
  );
};
