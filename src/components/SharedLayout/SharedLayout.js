import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { Container, Header, Wrapper, Logo, Link } from './SharedLayout.styled';
import { MdLocalMovies } from 'react-icons/md';
import { Loader } from '../Loader/Loader';
import { Toaster } from 'react-hot-toast';

export const SharedLayout = () => {
  return (
    <Container>
      <Header>
        <Link to="/start">
        <Wrapper>
          <MdLocalMovies size="30" />
          <Logo>
            TMDB{' '}
          </Logo>
        </Wrapper>
        </Link>

        <nav>
          <Link to="/register">Register</Link>
          <Link to="/login">Login</Link>
          <Link to="/home" end>
            Home
          </Link>
          <Link to="/movies">Movies</Link>
        </nav>
      </Header>
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
      <Toaster position="bottom-left" reverseOrder={false} />
    </Container>
  );
};
