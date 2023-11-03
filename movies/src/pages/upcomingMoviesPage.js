import React, { useState, useEffect } from "react";
import PageTemplate from '../components/templateMovieListPage'
import { getUpcomingMovies } from "../api/tmdb-api";
import PlaylistAddIcon from '@mui/icons-material/PlaylistAdd';

const UpcomingMoviesPage = () => {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        getUpcomingMovies().then((movies) => {
            setMovies(movies);
        });
    }, []);

    return (
        <PageTemplate
            title="Upcoming Movies"
            movies={movies}
            action={(movie) => {
                return <PlaylistAddIcon movie={movie} />
              }}
        />
    );
};

export default UpcomingMoviesPage;