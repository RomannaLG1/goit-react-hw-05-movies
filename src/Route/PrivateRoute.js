import { Navigate } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';
// import { getAuth, onAuthStateChanged } from 'firebase/auth';
// import { refreshUser } from 'redux/userSlice';
// import { useEffect, useState } from 'react';
// import { useDispatch } from 'react-redux';
/**
 * - If the route is private and the user is logged in, render the component
 * - Otherwise render <Navigate> to redirectTo
 */

export const PrivateRoute = ({refr, component: Component, redirectTo = '/' }) => {
  const { isLoggedIn} = useAuth();


  const shouldRedirect = !isLoggedIn && !refr  ;
  return shouldRedirect ? <Navigate to={redirectTo} /> : Component;
};