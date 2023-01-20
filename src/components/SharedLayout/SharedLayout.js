import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { Container, Header, Wrapper, Logo, Link } from './SharedLayout.styled';
import { MdLocalMovies } from 'react-icons/md';
import { Loader } from '../Loader/Loader';
import { Toaster } from 'react-hot-toast';
import { useAuth } from 'hooks/useAuth';
import { useDispatch } from 'react-redux';
import { removeUser } from '../../redux/userSlice';

export const SharedLayout = () => {
  const { isAuth, email } = useAuth();
  const dispatch = useDispatch();
  return (
    <Container>
      <Header>
        <Link to="/start">
          <Wrapper>
            <MdLocalMovies size="30" />
            <Logo>TMDB </Logo>
          </Wrapper>
        </Link>

        <nav>
          {console.log('isAuth', isAuth)}
          {isAuth ? (
            <>
              {' '}
              <Link to="/home" end>
                Home
              </Link>
              <Link to="/movies">Movies</Link>
              <p>User: {email}</p>
              <button type="button" onClick={() => dispatch(removeUser())}>
                Logout
              </button>
            </>
          ) : (
            <>
              {' '}
              <Link to="/register">Register</Link>
              <Link to="/login">Login</Link>
            </>
          )}
        </nav>
      </Header>
     
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
   

      <Toaster position="bottom-left" reverseOrder={false} />
    </Container>
  );
};
