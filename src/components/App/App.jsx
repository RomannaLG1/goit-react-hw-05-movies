import { ToastContainer } from 'react-toastify';
import { Route, Routes, Navigate } from 'react-router-dom/dist';
import { lazy } from 'react';
import { SharedLayout } from '../SharedLayout/SharedLayout';
import 'react-toastify/dist/ReactToastify.css';
import { Register } from 'Pages/Register';
import { Login } from 'Pages/Login';
import { Start } from 'Pages/Start';
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
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />

          <Route path="/home" element={<Home />} />

          <Route path="movies" element={<Movies />} />
          <Route path="movies/:movieId" element={<MovieDetails />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
        </Route>
        <Route path="*" element={<Navigate to={'/'} />} />
      </Routes>
      <ToastContainer autoClose={3000} />
    </>
  );
};
