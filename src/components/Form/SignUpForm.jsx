import { useDispatch } from 'react-redux';
import { setUser } from 'redux/userSlice';
import { Form } from './Form';
import {useNavigate} from 'react-router-dom';
import {  createUserWithEmailAndPassword  } from 'firebase/auth';
import {auth} from '../../firebase';
//REGISTER//
export const SigUpForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate()
 

  const handleSubmit = (email, password) => {
  
    // const auth = getAuth();
    // console.log('auth', auth);
    createUserWithEmailAndPassword(auth, email, password)
      .then(({user}) => {
        console.log('user', user);
        dispatch(setUser({
            email: user.email,
            id: user.uid,
            token: user.accessToken

        }));
        navigate('/home')
      })
      .catch(console.log);
  };

  return( <Form event='Sign Up' onSubmit={handleSubmit}/>);
};