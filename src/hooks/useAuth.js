import { useSelector } from 'react-redux';
import { selectUser } from '../redux/selectors.js';

export const useAuth = () => {
  const { email, token, id } = useSelector(selectUser);

  return {
    isAuth: !!email,
    email,
    token,
    id,
  };
};
