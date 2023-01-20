import { useAuth } from 'hooks/useAuth';
import { Navigate } from 'react-router-dom';

export const Start = () => {
  const { isAuth, email } = useAuth();
  //    const dispatch = useDispatch();
  return isAuth ? (
    <div>
      <h1>Wellcome, {email} </h1>
      {/* <button onClick={() => dispatch(removeUser())}>Log out from {email}</button> */}
    </div>
  ) : (
    <Navigate to="/login" />
  );
};
