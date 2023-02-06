import { NavLink, useLocation, useSearchParams } from 'react-router-dom';
import { useState, useEffect, useRef } from 'react';
import * as API from '../api-service';
import { Item, List, Image, Wrapper, MainWrapper } from './Home.styled';
import { Loader } from '../components/Loader/Loader';
import { toast } from 'react-toastify';
import { BasicPagination } from 'components/Pagination/Pagination';

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  // const [page, setPage] = useState(parseInt(props.location.search?.split('=')[1] || 1));
  const [page, setPage] = useState(
    JSON.parse(localStorage.getItem('page')) || 1
  );
  const [pageQty, setPageQty] = useState(0);
  const location = useLocation();
  const [searchParams, setSearchParams] = useSearchParams();
  const ref = useRef(null);
  useEffect(() => {
    ref.current.scrollIntoView({ behavior: 'smooth' });
  }, [page]);

  useEffect(() => {
    window.localStorage.setItem('page', JSON.stringify(page));
    setSearchParams(`page=${page}`);
    console.log('searchParams', searchParams);
  }, [page, searchParams, setSearchParams]);

  useEffect(() => {
    const fetchMovies = async page => {
      try {
        setIsLoading(true);
        const movies = await API.fetchPopularMovies(page);

        setMovies(movies.results);
        setPageQty(movies.total_pages);
        if (movies.total_pages < page) {
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
    <MainWrapper>
      {error && toast.error('Something wrong...Try again')}
      {isLoading && <Loader />}
      <Wrapper ref={ref}>
        {movies && (
          <List>
            {movies.map(({ poster_path, title, id }) => (
              <Item key={id}>
                <NavLink to={`/movies/${id}`} state={{ from: location }}>
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
      </Wrapper>
      {pageQty > 0 && (
        <BasicPagination
          count={pageQty}
          page={page}
          onChange={(_, num) => setPage(num)}
          navLink={NavLink}
        />
      )}
    </MainWrapper>
  );
};

export default Home;
