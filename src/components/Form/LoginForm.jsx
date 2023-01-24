import { useEffect} from 'react';
import { useDispatch } from 'react-redux';
import { Form } from './Form';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { toast } from 'react-toastify';
import { login } from 'redux/operations';
import { refreshUser } from 'redux/userSlice';


export const LoginForm = () => {
  const dispatch = useDispatch();


  useEffect(() => {
    const auth = getAuth();

    const unsubscribe = onAuthStateChanged(auth, currentUser => {
      dispatch(refreshUser(currentUser));
    });

    return () => {
      unsubscribe();
    };
  }, [dispatch]);

  const handleSubmit = async (email, password) => {
    dispatch(login({ email, password })).catch(() =>
      toast.error('Invalid user')
    );
  };

  return (
    <>
      <Form event="Login" onSubmit={handleSubmit} />
    </>
  );
};
