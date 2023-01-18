import { NavLink, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import * as API from '../api-service';
import { Item, List, Image } from './Home.styled';
import { Loader } from '../components/Loader/Loader';
import { toast } from 'react-toastify';
import { BasicPagination } from 'components/Pagination/Pagination';

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  // const [page, setPage] = useState(parseInt(props.location.search?.split('=')[1] || 1));
  const [page, setPage] = useState(1);
  const [pageQty, setPageQty] = useState(0);
  const location = useLocation();

  useEffect(() => {
    const fetchMovies = async page => {
      try {
        setIsLoading(true);
        const movies = await API.fetchPopularMovies(page);
        console.log(movies);
        setMovies(movies.results);
        setPageQty(movies.total_pages);
        if(movies.total_pages < page) {
          setPage(1);
        }

        setIsLoading(false);
      } catch (error) {
        console.log(error);
        setError(error.message);
        setIsLoading(false);
      }
    };
    fetchMovies(page);
    // console.log(pageQty);
  }, [page, pageQty]);

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
      {pageQty > 0 && (
        <BasicPagination
          count={pageQty}
          page={page}
          onChange={(_, num) => setPage(num)}
          navLink={NavLink}
        />
      )}
    </main>
  );
};

export default Home;
