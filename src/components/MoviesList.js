import React from "react";
import Movie from "./Movie";
import classes from "./moviesList.module.css";

const MoviesList = (props) => {
  return (
    <ul className={classes.moviesList}>
      {props.movies.map((item) => {
        return (
          <Movie
            key={item.id}
            title={item.title}
            release={item.release}
            openingTxt={item.openingTxt}
          />
        );
      })}
    </ul>
  );
};

export default MoviesList;
