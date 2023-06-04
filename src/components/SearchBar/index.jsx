import React, { useState } from "react";
import { useDispatch } from "react-redux";
import styles from "./SearchBar.module.css";
import { Link } from "react-router-dom";
import { getVideogames, limpiarSearched } from "../../store/actions";

const SearchBar = () => {
  const [state, setState] = useState({
    name: "",
  });

  const dispatch = useDispatch();

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.value });
  };

  const handleSubmit = (e) => {
    dispatch(limpiarSearched());
    state.name
      ? dispatch(getVideogames(state.name))
      : alert("Debe ingresar un nombre...");
  };

  return (
    <div className={styles.buscador}>
      <form className={styles.form}>
        <input
          type="text"
          placeholder="Search by name..."
          value={state.name}
          name="name"
          onChange={(e) => handleChange(e)}
          className={styles.barra}
        ></input>
        <Link to={`/videogames?name=${state.name}`} className={styles.navLink}>
          <button
            type="submit"
            onClick={(e) => handleSubmit(e)}
            className={styles.boton}
          >
            Search!
          </button>
        </Link>
      </form>
    </div>
  );
};

export default SearchBar;