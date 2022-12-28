import { NavLink, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import * as API from '../api-service';
import { Item, List, Image } from './Home.styled';
import { Loader } from '../components/Loader/Loader';
import { toast } from 'react-toastify';

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const location = useLocation();

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        setIsLoading(true);
        const movies = await API.fetchPopularMovies();
        setMovies(movies);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
        setError(error.message);
        setIsLoading(false);
      }
    };
    fetchMovies();
  }, []);

  return (
    <main>
      {error && toast.error('Something wrong...Try again')}
      {isLoading && <Loader />}
      {movies && (
        <List>
          {movies.map(({ poster_path, title, id }) => (
            <Item key={id}>
              <NavLink to={`movies/${id}`} state={{ from: location }}>
                {' '}
                <Image
                  src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
                  alt={title}
                />{' '}
                <h3>{title}</h3>
              </NavLink>
            </Item>
          ))}
        </List>
      )}
    </main>
  );
};

export default Home;
