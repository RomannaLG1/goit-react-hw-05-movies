
import { useDispatch } from 'react-redux';
import { Form } from './Form';
import { toast } from 'react-toastify';
import { login } from 'redux/operations';



export const LoginForm = () => {
  const dispatch = useDispatch();


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
