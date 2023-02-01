import * as API from '../api-service';
import { useState, useEffect, useRef } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { Item, List, Image, Wrapper, MainWrapper } from './Home.styled';
import { useSearchParams } from 'react-router-dom';
import { SearchBox } from '../components/SearchBox/SearchBox';
import { Loader } from '../components/Loader/Loader';
import { toast } from 'react-toastify';
import defaultImg from '../components/image/defaultImg.png';
import { BasicPagination } from 'components/Pagination/PaginationSearch';

const Movies = (props) => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams();
  const [page, setPage] = useState(1);
  const [pageQty, setPageQty] = useState(0);
  const movieQuery = searchParams.get('query');
  // const moviePage = searchParams.get('page');
  const location = useLocation();
  const ref = useRef (null);
  useEffect(() => {
    ref.current.scrollIntoView({ behavior: 'smooth' });
  }, [page, movieQuery]);

  useEffect(() => {
    if (!movieQuery) {
      return;
    }

    const fetchMovies = async (searchQuery, page) => {
      try {
        setIsLoading(true);
        const movies = await API.fetchMovieToSearch(searchQuery, page);
        if (movies.length === 0) {
          toast("We don't found any films");
        }
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
    fetchMovies(movieQuery, page);
  }, [movieQuery, page]);

  const handleSubmit = (query='', page=1) => {

    if (!query ) {
      console.log('enter value');
      return;
    }

    console.log('query', query);
    // setSearchParams((query !== '' ? { query } : {}) || (page !== 1 ? { page } : 1));
    setSearchParams(`query=${query}&page=${page}`)
   
    setMovies([]);
    
  };



  return (
    <MainWrapper>
      <SearchBox onSubmit={handleSubmit} />
      {error && toast.error('Something wrong...Try again')}
      {isLoading && <Loader />}
       <Wrapper ref={ref}> 
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
       </Wrapper>
         {pageQty > 0 && (
        <BasicPagination
          count={pageQty}
          page={page}
          onChange={(_, num) => setPage(num)}
          navLink={NavLink}
          query={movieQuery}
        />
      )}
    </MainWrapper>
  );
};

export default Movies;
