import React, {useEffect} from "react";
import { useDispatch } from "react-redux";
import { Link } from 'react-router-dom';
import { getInfo, getVideogames } from "../../store/actions";
import styles from "./landingPage.module.css"

const LandingPage = (props) =>  {

    const dispatch = useDispatch()
    
    useEffect(()=> 
    dispatch(getInfo()), [])

    useEffect(()=> 
    dispatch(getVideogames()), [])

    return (
      <div className={styles.home} id={styles.contain}>
        <Link to={`/videogames`}>
          <button className={styles.homeButton}>Let's jump!</button>
        </Link>
      </div>
    );
  }

export default LandingPage;