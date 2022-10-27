import React from 'react'
import { useParams } from 'react-router-dom';
import { API_KEY } from './ListMovies';

const MovieDetail = () => {

    const params = useParams();

    const URL = `https://api.themoviedb.org/3/movie/${params.idFilm}?api_key=${API_KEY}`;

    return (
        <div>
            <button onClick={() => console.log(params)}>Show Params</button>
            MovieDetail
        </div>
    );
};

export default MovieDetail