import { Navigate } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { refreshUser } from 'redux/userSlice';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
/**
 * - If the route is private and the user is logged in, render the component
 * - Otherwise render <Navigate> to redirectTo
 */

export const PrivateRoute = ({ component: Component, redirectTo = '/' }) => {
  const { isLoggedIn} = useAuth();
  const [isRefresh, setIsRefresh] = useState(true)
  const dispatch = useDispatch();
  useEffect (() => {
    const auth = getAuth();

    const unsubscribe = onAuthStateChanged(auth, currentUser => {
      dispatch(refreshUser(currentUser));
    });
setIsRefresh(true);
    return () => {
      unsubscribe();
    };
  }, [dispatch]);

  const shouldRedirect = !isLoggedIn || !isRefresh ;
  return shouldRedirect ? <Navigate to={redirectTo} /> : Component;
};