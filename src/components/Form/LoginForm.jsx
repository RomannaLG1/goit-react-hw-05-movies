import { useDispatch } from 'react-redux';
import { setUser } from 'redux/userSlice';
import {useNavigate} from 'react-router-dom';
import { Form } from './Form';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { toast } from 'react-toastify';

export const LoginForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate()
  const handleSubmit = (email, password) => {
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
    .then(({user}) => {
        console.log('user', user);
        dispatch(setUser({
            email: user.email,
            id: user.uid,
            token: user.accessToken

        }));
        navigate('/home')
      })
      .catch(() => toast.error('Invalid user'));
  };

  return( <Form event='Login' onSubmit={handleSubmit}/>);
};
