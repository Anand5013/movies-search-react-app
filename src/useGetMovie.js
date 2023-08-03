import { useQuery } from "@tanstack/react-query";
import Axios from "axios";
import { useSelector } from "react-redux";
import { useCallback } from "react";
import { debounce } from "lodash";

const apiUrl = `http://www.omdbapi.com?apikey=d91353fe`;

export const useGetMovie = () => {
  const movieName = useSelector((state) => state.movie.value.movieName);

  const debouncedSearch = useCallback(
    debounce((searchTerm) => {
      refetch();
    }, 100),
    []
  );

  const {
    data: movies,
    isLoading: isMovieLoading,
    refetch,
  } = useQuery(
    ["movies", movieName],
    async () => {
      // if (movieName) {
      const response = await Axios.get(`${apiUrl}&s=${movieName}`);
      return response.data.Search;
      // } else {
      //   // Fetch some movie data from the API for the initial list
      //   const response = await Axios.get(`${apiUrl}&s=Harry Potter`);
      //   return response.data.Search;
      // }
    },
    {
      enabled: true,
    }
  );

  const handleSearch = () => {
    debouncedSearch(movieName);
  };

  return { movies, isMovieLoading, handleSearch };
};
