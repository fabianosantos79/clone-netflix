import React, { useEffect, useState } from 'react'
import { getMovies } from '../../api';
import styles from './ListItem.module.css';

const imageHost = "https://image.tmdb.org/t/p/original"

const ListMovies = ({ title, path }) => {
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

    return (
        <div className={styles.container}>
            <h2 className='row-header'>{title}</h2>
            <div className={styles.cards}>
                {movies.map(movie => (
                    <img key={movie.id} src={`${imageHost}${movie.poster_path}`} alt={movie.name} />
                ))}
            </div>
        </div>
    )
}

export default ListMovies;