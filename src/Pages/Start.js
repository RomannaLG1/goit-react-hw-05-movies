import { useAuth } from 'hooks/useAuth';
import { Navigate } from 'react-router-dom';
import { MainWrapper } from './Home.styled';

export const Start = () => {
  const { isLoggedIn, email } = useAuth();

  return isLoggedIn ? (
    <MainWrapper>
      <h1>Wellcome, {email} </h1>
    </MainWrapper>
  ) : (
    <Navigate to="/login" />
  );
};
