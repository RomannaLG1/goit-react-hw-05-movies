import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { Container, Header, Wrapper, Logo, Link } from './SharedLayout.styled';
import { MdLocalMovies } from 'react-icons/md';
import { Loader } from '../Loader/Loader';

export const SharedLayout = () => {
  return (
    <Container>
      <Header>
        <Wrapper>
          <MdLocalMovies size="30" />
          <Logo>TMDB</Logo>
        </Wrapper>

        <nav>
          <Link to="/" end>
            Home
          </Link>
          <Link to="/movies">Movies</Link>
        </nav>
      </Header>
      <Suspense fallback={<Loader/>}>
        <Outlet />
      </Suspense>
    </Container>
  );
};
