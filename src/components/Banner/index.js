import { useEffect, useState } from 'react';
import styles from './Banner.module.css';
import { getMovies } from '../../api';

const Banner = ({ path }) => {

    const [movie, setMovies] = useState({})

    const getMoviesTrending = async () => {
        try {
            const data = await getMovies(path)
            const movieOneTrending = data.results;
            const movieRandom = Math.floor(Math.random() * movieOneTrending.length);
            setMovies(movieOneTrending[movieRandom])
            console.log(movie);
        } catch (error) {
            console.log("Error Banner: " + error);
        }
    }

    useEffect(() => {
        getMoviesTrending()
    }, [])

    return (
        <div className={styles.banner} style={{
            backgroundSize: "cover",
            backgroundImage: `url("https://image.tmdb.org/t/p/original${movie.backdrop_path}")`,
            backgroundPosition: "center",
        }}>
            <h2 className={styles.titulo}>{movie.title}</h2>
            <p className={styles.descricao}>{movie.overview}</p>
        </div>
    )
}

export default Banner