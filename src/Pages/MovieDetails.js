import * as API from '../api-service';
import { useState, useEffect } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import { BackLink } from '../components/BackLink/BackLink';
import { MovieCard } from 'components/MovieCard/MovieCard';

const MovieDetails = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState({});
  const location = useLocation();
  const backLinkHref = location.state?.from ?? '/movies';

  useEffect(() => {
    const fetchDetails = async id => {
      try {
        const details = await API.fetchMovieById(id);
        setMovie(details);
      } catch (error) {
        console.log('error');
      }
    };
    fetchDetails(movieId);
  }, [movieId]);

  return (
    <main>
      <BackLink to={backLinkHref}>Back</BackLink>
      <MovieCard movie={movie} />
    </main>
  );
};

export default MovieDetails;
