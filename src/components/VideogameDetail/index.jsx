import React from "react";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getVideogameDetail, limpiarDetails } from "../../store/actions";
import styles from "./VideogameDetail.module.css";
import Loading from "../Loading/index";

const VideogameDetail = (props) => {
  //console.log(window)

  const url_id = props.match.params.id;

  const details = useSelector((state) => state.gameDetail);
  const dispatch = useDispatch();
  const { id, description, genres, image, name, platforms, rating, released } =
    details;
  
    useEffect(() => {
    dispatch(getVideogameDetail(url_id));

  //acá le digo que cuando unmount, despache la action

      return () => dispatch(limpiarDetails());
   }, []);
  
  console.log("Hola!...", details);

  return (
    <div>
      {Object.entries(details).length === 0 ? (
        <Loading />
      ) : (
        <div className={styles.body}>
          {/* Cabecera*/}
          <div className={styles.containerHeader}>
            <div className={styles.addGame}>
              {/* <Link to={`/videogames`} className={styles.navLink}> */}
              <button
                className={styles.boton}
                onClick={() => window.history.back()}
              >
                Go Back!
              </button>
              {/* </Link> */}
            </div>
            <div className={styles.title}>
              <h1>{name}</h1>
            </div>
          </div>

          {/* Container Imagen + Datos*/}
          <div className={styles.presentation}>
            <div className={styles.containerImagen}>
              <img src={image} alt={image} className={styles.image} />
            </div>
            <div className={styles.data}>
              <div className={styles.details}>
                <h4 className={styles.titles}>Title:</h4>

                <span className={styles.datos}>{name}</span>
              </div>
              <div className={styles.details}>
                <h4 className={styles.titles}>Released:</h4>

                <span className={styles.datos}>{released}</span>
              </div>
              <div className={styles.details}>
                <h4 className={styles.titles}>Genres:</h4>

                <div className={styles.datos}>
                  {genres &&
                    genres.map((genre) => (
                      <span className={styles.datosGenresSpan} key={genre}>
                        {genre}
                      </span>
                    ))}
                </div>
              </div>
              <div className={styles.details}>
                <h4 className={styles.titles}>Platforms:</h4>

                <div className={`${styles.datos} ${styles.datosPlatforms}`}>
                  {platforms &&
                    platforms.map((platform) => (
                      <span
                        className={styles.datosPlatformsSpan}
                        key={platform.id}
                      >
                        {platform}
                      </span>
                    ))}
                </div>
              </div>
              <div className={styles.details}>
                <h4 className={styles.titles}>Rating:</h4>

                <span className={styles.datos}>
                  {rating}
                  {rating === 0
                    ? ` Not ranking yet ☹`
                    : rating < 3
                    ? " Average rating"
                    : rating < 4
                    ? ` Good Rating 🔥🔥🔥`
                    : rating <= 4.7
                    ? ` Good Rating 🔥🔥🔥🔥`
                    : ` Excellent! 🔥🔥🔥🔥🔥`}
                </span>
              </div>
            </div>
          </div>

          {/* Container descripción*/}
          <div className={styles.description}>
            <h4 className={styles.titleDescription}>
              <strong> Description: </strong>
            </h4>

            <p className={styles.idGame}>
              <span>
                <strong>IdGame: {id}</strong>
              </span>
            </p>

            <div className={styles.descriptionText}>
              <p>{description}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default VideogameDetail;