import { ToastContainer } from 'react-toastify';
import { Route, Routes, Navigate } from 'react-router-dom/dist';
import { lazy, useEffect, useState } from 'react';
import { SharedLayout } from '../SharedLayout/SharedLayout';
import 'react-toastify/dist/ReactToastify.css';
import { Register } from 'Pages/Register';
import { Login } from 'Pages/Login';
import { Start } from 'Pages/Start';
import { RestrictedRoute } from 'Route/RestrictedRoute';
import { PrivateRoute } from 'Route/PrivateRoute';
import { useDispatch } from 'react-redux';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { refreshUser } from 'redux/userSlice';
import { MainWrapper } from 'Pages/Home.styled';
const Home = lazy(() => import('../../Pages/Home'));
const Movies = lazy(() => import('../../Pages/Movies'));
const MovieDetails = lazy(() => import('../../Pages/MovieDetails'));
const Cast = lazy(() => import('../Cast/Cast'));
const Reviews = lazy(() => import('../Reviews/Reviews'));

export const App = () => {
  const [isRefresh, setIsRefresh] = useState(true);
  const dispatch = useDispatch();
  useEffect(() => {
    const auth = getAuth();
   
    const unsubscribe = onAuthStateChanged(auth, currentUser => {
      dispatch(refreshUser(currentUser));
      setIsRefresh(false);
    });
    
    return () => {
      unsubscribe();
    };
    
  }, [dispatch]);

  return isRefresh ? (
    <MainWrapper>
      {console.log('refresh user')}
      <b>Refresh user...</b>
    </MainWrapper>
  ) : (
    <>
      <Routes>
        {' '}
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Start />} />
          <Route
            path="/register"
            element={
              <RestrictedRoute redirectTo="/" component={<Register />} />
            }
          />
          <Route
            path="/login"
            element={<RestrictedRoute redirectTo="/" component={<Login />} />}
          />

          <Route
            path="home"
            element={<PrivateRoute refr={isRefresh} redirectTo="/login" component={<Home />} />}
          />

          <Route
            path="movies"
            element={
              <PrivateRoute refr={isRefresh}  redirectTo="/login" component={<Movies />} />
            }
          />
          <Route
            path="movies/:movieId"
            element={
              <PrivateRoute refr={isRefresh}  redirectTo="/login" component={<MovieDetails />} />
            }
          >
            <Route
              path="cast"
              element={
                <PrivateRoute refr={isRefresh}  redirectTo="/login" component={<Cast />} />
              }
            />
            <Route
              path="reviews"
              element={
                <PrivateRoute refr={isRefresh}  redirectTo="/login" component={<Reviews />} />
              }
            />
          </Route>
        </Route>
        <Route
          path="*"
          element={
            <RestrictedRoute redirectTo="/" component={<Navigate to={'/'} />} />
          }
        />
      </Routes>
      <ToastContainer autoClose={3000} />
    </>
  );
};
