import { useSelector } from 'react-redux';
import { selectUser } from '../redux/selectors.js';

export const useAuth = () => {
  const { email, token, id, isLoggedIn, isRefreshing } =
    useSelector(selectUser);

  return {
    isLoggedIn,
    isRefreshing,
    email,
    token,
    id,
  };
};
