import React from "react";
import classes from "./movie.module.css";

const Movie = (props) => {
  return (
    <li className={classes.movie}>
      <h2>{props.title}</h2>
      <h3>{props.release}</h3>
      <p>{props.openingTxt}</p>
    </li>
  );
};

export default Movie;
