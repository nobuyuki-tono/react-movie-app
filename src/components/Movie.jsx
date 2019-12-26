import React, { Fragment } from "react";

// component
import MovieInfo from "./elements/MovieInfo";
import Navigation from "./elements/Navigation";
import MovieInfoBar from "./elements/MovieInfoBar";
import Actor from "./elements/Actor";
import Grid from "./elements/Grid";
import Spinner from "./elements/Spinner";

import useMovieFetch from "./Hooks/useMovieFetch";

const Movie = ({ movieId }) => {
  const [movie, loading, error] = useMovieFetch(movieId);

  if (error) return <div>Something went wrong...</div>;

  if (loading) return <Spinner />;

  return (
    <Fragment>
      <Navigation movie={movie.original_title} />
      <MovieInfo movie={movie} />
      <MovieInfoBar
        time={movie.runtime}
        budget={movie.budget}
        revenue={movie.revenue}
      />
      <Grid header="Actors">
        {movie.actors.map(actor => (
          <Actor key={actor.credit_id} actor={actor} />
        ))}
      </Grid>
    </Fragment>
  );
};

export default Movie;
