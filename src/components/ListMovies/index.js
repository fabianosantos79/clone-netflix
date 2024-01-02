import React, { useEffect, useState } from 'react'
import { getMovies } from '../../api';
import styles from './ListItem.module.css';
import { SlArrowRight } from "react-icons/sl";
import { SlArrowLeft } from "react-icons/sl";


const imageHost = "https://image.tmdb.org/t/p/original"

const ListMovies = ({ title, path, isLarge }) => {
    const [movies, setMovies] = useState([]);
    const [scrollX, setScrollX] = useState(0);

    const fecthMovies = async () => {
        try {
            const data = await getMovies(path)
            setMovies(data.results)
        } catch (error) {
            console.log("FecthMovies = " + error);
        }
    }

    const handleArrowLeft = () => {
        let widthX = 0 + 300;
        if (scrollX < 0) {
            setScrollX(scrollX + widthX);
        }
    }

    const handleArrowRight = () => {
        let widthFull = movies.length * 150
        let widthX = 0 - 300;
        if (scrollX < widthFull) {
            setScrollX(scrollX + widthX);
        }
    }



    useEffect(() => {
        fecthMovies(path)
    }, [])


    return (
        <div className={styles.container}>
            <div className={styles.titulo}>
                <h2>{title}</h2>
                <div className={styles.arrows}>
                    <SlArrowLeft className={styles.arrowLeft} onClick={handleArrowLeft} />
                    <SlArrowRight className={styles.arrowRight} onClick={handleArrowRight} />
                </div>
            </div>
            <div className={styles.cards} style={{ marginLeft: scrollX }}>
                {movies.map(movie => (
                    <img className={isLarge ? styles.imgCardLarge : styles.imgCard} key={movie.id} src={isLarge ? `${imageHost}${movie.backdrop_path}` : `${imageHost}${movie.poster_path}`} alt={movie} />
                ))
                }
            </div>
        </div>
    )
}

export default ListMovies;