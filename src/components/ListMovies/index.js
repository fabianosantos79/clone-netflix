import React, { useEffect, useState } from 'react'
import { getMovies } from '../../api';
import styles from './ListItem.module.css';
import { SlArrowRight } from "react-icons/sl";
import { SlArrowLeft } from "react-icons/sl";



const imageHost = "https://image.tmdb.org/t/p/original"

const ListMovies = ({ title, path, isLarge }) => {
    const [movies, setMovies] = useState([]);

    const fecthMovies = async () => {
        try {
            const data = await getMovies(path)
            setMovies(data.results)
        } catch (error) {
            console.log("FecthMovies = " + error);
        }
    }

    useEffect(() => {
        fecthMovies(path)
    }, [])

    const handleArrowLeft = () => {
        
    }

    const handleArrowRight = () => {

    }

    return (
        <div className={styles.container}>
            <div className={styles.titulo}>
                <h2>{title}</h2>
                <div className={styles.arrows}>
                    <SlArrowLeft className={styles.arrowLeft} onClick={handleArrowLeft} />
                    <SlArrowRight className={styles.arrowRight} onClick={handleArrowRight} />
                </div>
            </div>
            <div className={styles.cards}>
                {movies.map(movie => (
                    <img className={isLarge ? styles.imgCardLarge : styles.imgCard} key={movie.id} src={isLarge ? `${imageHost}${movie.backdrop_path}` : `${imageHost}${movie.poster_path}`} alt={movie.name} />
                ))}
            </div>
        </div>
    )
}

export default ListMovies;