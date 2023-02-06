import Box from 'components/Box';
import { Suspense } from 'react';
import { BsStar } from 'react-icons/bs';
import { Link, Outlet, useLocation } from 'react-router-dom';
import { Wrapper, Image, Title, Text, List, Item } from './MovieCard.styled';
import { Loader } from '../Loader/Loader';

export const MovieCard = ({ movie }) => {
  const { poster_path, title, release_date, vote_average, overview } = movie;
  const location = useLocation();

  return (
    <>
      <Wrapper>
        <Image
          src={`https://image.tmdb.org/t/p/w500${poster_path}`}
          alt={title}
        />
        <Box>
          <Title>{title}</Title>
          <Title>{`${release_date ? release_date.slice(0, 4) : 'N/A'}`}</Title>
          <Title>
            <BsStar size="20" />{' '}
            {vote_average ? vote_average.toFixed(0) : 'N/A'}
          </Title>
          <Text>{overview}</Text>
          <List>
            <Item>
              <Link to="cast" state={location.state}>
                Cast
              </Link>
            </Item>
            <Item>
              <Link to="reviews" state={location.state}>
                Reviews
              </Link>
            </Item>
          </List>
        </Box>
      </Wrapper>

      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </>
  );
};
