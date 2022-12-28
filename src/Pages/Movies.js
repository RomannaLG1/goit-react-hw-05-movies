import * as API from '../api-service';
import { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { Item, List, Image } from './Home.styled';
import { useSearchParams } from 'react-router-dom';
import { SearchBox } from '../components/SearchBox/SearchBox';
import { Loader } from '../components/Loader/Loader';
import { toast } from 'react-toastify';
import defaultImg from '../components/image/defaultImg.png';

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams();
  const movieQuery = searchParams.get('query');
  const location = useLocation();

  useEffect(() => {
    if (!movieQuery) {
      return;
    }

    const fetchMovies = async searchQuery => {
      try {
        setIsLoading(true);
        const movies = await API.fetchMovieToSearch(searchQuery);
        if (movies.length === 0) {
          toast("We don't found any films");
        }
        setMovies(movies);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
        setError(error.message);
        setIsLoading(false);
      }
    };
    fetchMovies(movieQuery);
  }, [movieQuery]);

  const handleSubmit = query => {
    if (!query) {
      console.log('enter value');
      return;
    }
    setSearchParams(query !== '' ? { query } : {});
    setMovies([]);
  };

  return (
    <main>
      <SearchBox onSubmit={handleSubmit} />
      {error && toast.error('Something wrong...Try again')}
      {isLoading && <Loader />}
      {movies && (
        <List>
          {movies.map(({ poster_path, title, id }) => (
            <Item key={id}>
              <NavLink to={`${id}`} state={{ from: location }}>
                {' '}
                <Image
                 src={poster_path? `https://image.tmdb.org/t/p/w500${poster_path}` : defaultImg}
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

export default Movies;
