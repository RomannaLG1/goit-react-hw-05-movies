import { useDispatch } from 'react-redux';

import { Form } from './Form';

import { register } from 'redux/operations';

//REGISTER//
export const SigUpForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (email, password) => {
    dispatch(register({ email, password }));
  };

  return <Form event="Sign Up" onSubmit={handleSubmit} />;
};
