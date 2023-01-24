import { ToastContainer } from 'react-toastify';
import { Route, Routes, Navigate } from 'react-router-dom/dist';
import { lazy } from 'react';
import { SharedLayout } from '../SharedLayout/SharedLayout';
import 'react-toastify/dist/ReactToastify.css';
import { Register } from 'Pages/Register';
import { Login } from 'Pages/Login';
import { Start } from 'Pages/Start';
import { RestrictedRoute } from 'Route/RestrictedRoute';
import { PrivateRoute } from 'Route/PrivateRoute';
const Home = lazy(() => import('../../Pages/Home'));
const Movies = lazy(() => import('../../Pages/Movies'));
const MovieDetails = lazy(() => import('../../Pages/MovieDetails'));
const Cast = lazy(() => import('../Cast/Cast'));
const Reviews = lazy(() => import('../Reviews/Reviews'));

export const App = () => {
  return (
    <>
      <Routes>
        {' '}
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Start />} />
          <Route
            path="/register"
            element={
              <RestrictedRoute redirectTo="/home" component={<Register />} />
            }
          />
          <Route
            path="/login"
            element={
              <RestrictedRoute redirectTo="/home" component={<Login />} />
            }
          />

          <Route
            path="home"
            element={<PrivateRoute redirectTo="/login" component={<Home />} />}
          />

          <Route
            path="movies"
            element={
              <PrivateRoute redirectTo="/login" component={<Movies />} />
            }
          />
          <Route
            path="movies/:movieId"
            element={
              <PrivateRoute redirectTo="/login" component={<MovieDetails />} />
            }
          >
            <Route
              path="cast"
              element={
                <PrivateRoute redirectTo="/login" component={<Cast />} />
              }
            />
            <Route
              path="reviews"
              element={
                <PrivateRoute redirectTo="/login" component={<Reviews />} />
              }
            />
          </Route>
        </Route>
        <Route
          path="*"
          element={
            <RestrictedRoute
              redirectTo="/"
              component={<Navigate to={'/'} />}
            />
          }
        />
      </Routes>
      <ToastContainer autoClose={3000} />
    </>
  );
};
