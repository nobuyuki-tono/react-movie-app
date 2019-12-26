import React, { Fragment, useState } from "react";
import {
  POSTER_SIZE,
  BACKDROP_SIZE,
  IMAGE_BASE_URL,
  POPULAR_BASE_URL,
  SEARCH_BASE_URL
} from "../config";

// import components
import HeroImage from "./elements/HeroImage";
import SearchBar from "./elements/SearchBar";
import Grid from "./elements/Grid";
import MovieThumb from "./elements/MovieThumb";
import LoadMoreBtn from "./elements/LoadMoreBtn";
import Spinner from "./elements/Spinner";

// custom hook
import useHomeFecth from "../components/Hooks/useHomeFetch";

import NoImage from "./images/no_image.jpg";

const Home = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [
    {
      state: { movies, currentPage, totalPages, heroImage },
      loading,
      error
    },
    fetchMovies
  ] = useHomeFecth();

  const searchMovies = search => {
    const endpoint = search ? SEARCH_BASE_URL + search : POPULAR_BASE_URL;

    setSearchTerm(search);
    fetchMovies(endpoint);
  };

  const loadMore = () => {
    console.log("Load more");
    const searEndpoint = `${SEARCH_BASE_URL}${searchTerm}&page=${currentPage +
      1}`;

    const popularEndpoint = `${POPULAR_BASE_URL}&page=${currentPage + 1}`;

    const endpoint = searchTerm ? searEndpoint : popularEndpoint;

    fetchMovies(endpoint);
  };

  if (error) return <h1>SOmthing went wrong...</h1>;
  if (!movies[0]) {
    return <Spinner />;
  }

  return (
    <Fragment>
      <HeroImage
        image={`${IMAGE_BASE_URL}${BACKDROP_SIZE}${heroImage.backdrop_path}`}
        title={heroImage.original_title}
        text={heroImage.overview}
      />
      <SearchBar callBack={searchMovies} />
      <Grid header={searchTerm ? "Search Result" : "Popular Movies"}>
        {movies.map(movie => (
          <MovieThumb
            key={movie.id}
            clickable
            image={
              movie.poster_path
                ? `${IMAGE_BASE_URL}${POSTER_SIZE}${movie.poster_path}`
                : NoImage
            }
            movieId={movie.id}
            movieName={movie.original_title}
          />
        ))}
      </Grid>

      {loading && <Spinner />}
      {currentPage < totalPages && !loading && (
        <LoadMoreBtn text="Load More" callBack={loadMore} />
      )}
    </Fragment>
  );
};

export default Home;
