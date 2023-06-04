import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import styles from "./VideogameCreation.module.css";
import { addVideogame } from "../../store/actions";
import Footer from "../Footer/index";
import image from "../../images/videogame.png";
import validation from "./validation";

const VideogameCreation = (props) => {
  const genresOpt = useSelector((store) => store.genres);
  const platformsOpt = useSelector((store) => store.platforms);
  const nameVideoGames = useSelector((store) => store.gamesLoaded)
  
  const dispatch = useDispatch();

  const [state, setState] = useState({
    name: "",
    description: "",
    released: "",
    rating: "",
    platforms: "",
    genres: "",
  });

  /*//! errors control? use errors state by inputs: No repeated names, rating validation for numbers only, ...(validation Js not only html restriction!), text message for pending errors.  */

  const [errors, setErrors] = useState({
    name: "",
    description: "",
    rating: null,
    released: null,
    disabled: ""
  });
  
  const nameFiltered = nameVideoGames.filter((title) => title.name === state.name);

   
  const handleChange = (event) => {
    const { id, value } = event.target;
    const uniqueName = nameFiltered.length 
    
    setState({ ...state, [id]: value });
    setErrors(
      validation({
        ...state,
        [id]: value,
        uniqueName,
      })
    );
    
  };

  const handleClick = (event) => {
    //console.log("Hola!...Creando?");

    if (event.target.attributes[1].value === "platform") {
      console.log("entro a platform");
      let newPlatforms = "";
      state.platforms.includes(`${event.target.value}`) === true
        ? (newPlatforms = state.platforms)
        : (newPlatforms = state.platforms.concat(`${event.target.value},`));
      setState({ ...state, platforms: newPlatforms });
    }

    if (event.target.attributes[1].value === "genre") {
      console.log("entro a genre");
      let newGenres = "";
      state.genres.includes(`${event.target.value}`) === true
        ? (newGenres = state.genres)
        : (newGenres = state.genres.concat(`${event.target.value},`));
      setState({ ...state, genres: newGenres });
    }
  };

  const handleCross = (event) => {
    if (event.target.attributes[1].value === "platform") {
      let newPlatforms = state.platforms
        .split(",")
        .filter((p) => p !== event.target.value)
        .join();
      setState({ ...state, platforms: newPlatforms });
    }
    if (event.target.attributes[1].value === "genre") {
      let newGenres = state.genres
        .split(",")
        .filter((g) => g !== event.target.value)
        .join();
      setState({ ...state, genres: newGenres });
    }
  };

  function handleSubmit(event) {
    event.preventDefault();

    if (!state.name) {
      return alert("Name is required");
    } else if (!state.rating || state.rating > 6) {
      return alert("Rating must be a number 0 to 5");
    } else if (!state.released) {
      return alert("Data released is required");
    }else if (!state.description) {
      return alert("Description is required");
    } else if (!state.platforms) {
      return alert("Platforms is required");
    }

    dispatch(addVideogame(state));
    alert("Videogame creado!");
    setState({
      name: "",
      description: "",
      released: "",
      rating: "",
      platforms: "",
      genres: "",
    });
  }

  return (
    <div className={styles.containerPpal}>
      {/* Cabecera*/}
      <div className={styles.containerHeader}>
        <div className={styles.addGame}>
          <Link to={`/videogames`} className={styles.navLink}>
            <button className={styles.boton}>Home</button>
          </Link>
        </div>
        <div className={styles.title}>
          <Link to={`/videogames`} className={styles.navLink}>
            <h1 className={styles.videogames}>Videogames</h1>
          </Link>
        </div>
      </div>

      {/* Formulario */}
      <div className={styles.containerCuerpoPpal}>
        <div className={styles.imageContainer}>
          <img className={styles.image} src={image} alt={"Mario and friends"} />
        </div>
        <div className={styles.formContainer}>
          <form className={styles.formu} onSubmit={(e) => handleSubmit(e)}>
            <div className={styles.campos}>
              <label className={styles.label} htmlFor="name">
                Name:{" "}
              </label>
              
              <p className={styles.error}>{errors.name && errors.name}</p>
              
              <input
                type="text"
                id="name"
                autoComplete="off"
                placeholder="*Name"
                value={state.name}
                onChange={(e) => handleChange(e)}
                className={styles.inputTitle}
              />
              <label className={styles.label} htmlFor="description">
                Description:{" "}
              </label>
              <p className={styles.error}>
                {errors.description && errors.description}
              </p>
              <textarea
                type="text"
                id="description"
                rows="8"
                cols="50"
                placeholder="*Description..."
                autoComplete="off"
                value={state.description}
                onChange={(e) => handleChange(e)}
                className={styles.inputDescription}
              />
              <label className={styles.label} htmlFor="released">
                Released:{" "}
              </label>
                <p className={styles.error}>
                  {errors.released && errors.released}
                </p>
              <input
                type="date"
                id="released"
                autoComplete="off"
                value={state.released}
                onChange={(e) => handleChange(e)}
                className={styles.inputTitle}
              />
              <label className={styles.label} htmlFor="rating">
                Rating:{" "}
              </label>
              <p className={styles.error}>{errors.rating && errors.rating}</p>
              <input
                type="number"
                placeholder="*rating de 0 a 5"
                step="0.1"
                min="0"
                max="5"
                id="rating"
                autoComplete="off"
                value={state.rating}
                onChange={handleChange}
                
                className={styles.inputRating}
              />
              <label className={styles.label} htmlFor="platforms">
                Platforms:{" "}
              </label>
              <select id="platforms" value={state.platforms} size="3">
                {platformsOpt &&
                  platformsOpt.map((platform) => (
                    <option
                      value={platform}
                      key={platform}
                      onClick={handleClick}
                      name="platform"
                    >
                      {platform}
                    </option>
                  ))}
              </select>
              <div className={styles.filterButton}>
                {state.platforms &&
                  state.platforms
                    .split(",")
                    .filter((platform) => platform.length > 0)
                    .map((platform) => (
                      <span className={styles.filterButton}>
                        <span className={styles.filterButton} key={platform}>
                          {platform}
                        </span>
                        <button
                          className={styles.filterButton}
                          onClick={handleCross}
                          name="platform"
                          value={platform}
                        >
                          X
                        </button>
                      </span>
                    ))}
              </div>
              <label className={styles.label} htmlFor="genres">
                Genres:{" "}
              </label>
              <select id="genres" value={state.genres} size="3">
                {genresOpt &&
                  genresOpt.map((genre) => (
                    <option
                      onClick={handleClick}
                      name="genre"
                      key={genre.id}
                      value={genre}
                    >
                      {genre}
                    </option>
                  ))}
              </select>
              <div className={styles.filterButton}>
                {state.genres &&
                  state.genres
                    .split(",")
                    .filter((genre) => genre.length > 0)
                    .map((genre) => (
                      <span className={styles.filterButton} key={genre.id}>
                        <span className={styles.filterButton}>{genre}</span>
                        <button
                          className={styles.filterButton}
                          onClick={handleCross}
                          name="genre"
                          value={genre}
                        >
                          X
                        </button>
                      </span>
                    ))}
              </div>
              {errors.disabled ? <p className={styles.errorForm}>⚠️ Insufficient data! ⚠️</p> : <p className={styles.validForm}>Let's create a new VideoGame! ✔️</p> }
              <button 
                className={styles.boton} 
                type="submit"
                disabled={errors.disabled}
                >
                Create!
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* Footer */}
      <div className={styles.containerFooter}>
        <Footer />
      </div>
    </div>
  );
};

export default VideogameCreation;
