//import React, { useState, useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import styles from "./FilterBox.module.css";
import {
  filterGenresAdd,
  filterSourceAdd,
  filterGenresRemove,
  filterSourceRemove,
} from "../../store/actions";

export const FilterBox = (props) => {
  const genresOpt = useSelector((store) => store.genres);
  const sourceOpt = useSelector((store) => store.source);
  const genresSel = useSelector((store) => store.filteredGenres);
  const sourcesSel = useSelector((store) => store.filteredSources);

  console.log(genresOpt);

  const dispatch = useDispatch();

  const handleClick = (event) => {
    if (event.target.attributes[1].value === "genre") {
      genresSel.includes(`${event.target.value}`) === true
        ? alert("Genero ya seleccionado")
        : dispatch(filterGenresAdd(`${event.target.value}`));
    }

    if (event.target.attributes[1].value === "source") {
      sourcesSel.includes(`${event.target.value}`) === true
        ? alert("Source ya seleccionada")
        : dispatch(filterSourceAdd(`${event.target.value}`));
    }
  };

  const handleCross = (event) => {
    if (event.target.attributes[0].value === "genre") {
      dispatch(filterGenresRemove(event.target.value));
    }
    if (event.target.attributes[0].value === "source") {
      dispatch(filterSourceRemove(event.target.value));
    }
  };

  return (
    <div id={styles.container}>
      
      <div id={styles.genreContainer}>
        <div className={styles.title}>
          <h4>View By Genre</h4>
        </div>
        <div id={styles.listSelection}>
          <select
            id="genres"
            value={genresOpt}
            size="3"
            className={styles.genresOpt}
          >
            {genresOpt &&
              genresOpt.map((genre) => (
                <option value={genre} onClick={handleClick} name="genre">
                  {genre}
                </option>
              ))}
          </select>
        </div>
        <div id={styles.filterOptBox}>
          {genresSel.length > 0 &&
            genresSel
              .filter((genre) => genre.length > 0)
              .map((genre) => (
                <div className={styles.options}>
                  <span className={styles.genresSelNames}>{genre}</span>
                  <button onClick={handleCross} name="genre" value={genre} >
                    X 
                  </button>
                </div>
              ))}
        </div>
      </div>

      <div id={styles.sourceContainer}>
        <h4>Select source</h4>
        <select
          id="source"
          value={sourceOpt}
          size="2"
          className={styles.genresOpt}
        >
          {sourceOpt &&
            sourceOpt.map((source) => (
              <option value={source} onClick={handleClick} name="source">
                {source}
              </option>
            ))}
        </select>
        <div className="filterButton">
          {sourcesSel.length > 0 &&
            sourcesSel
              .filter((source) => source.length > 0)
              .map((source) => (
                <span className="filterButton">
                  <span className="filterButton">{source}</span>
                  <button onClick={handleCross} name="source" value={source}>
                    X
                  </button>
                </span>
              ))}
        </div>
      </div>
    </div>
  );
};

export default FilterBox;
