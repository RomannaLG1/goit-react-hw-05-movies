// import { Button, TextField } from '@mui/material';
import { Button, TextField } from '@mui/material';
import { useForm } from 'react-hook-form';
import { ErrorMessage, ErrorWrapper, FormStyled } from './Form.styled';

export const Form = ({ event, onSubmit }) => {

  const {
    register,
    formState: { errors, isValid },
    handleSubmit,
    reset,
  } = useForm({
    mode: 'onBlur',
  });

  const handleSubmitCustom = data => {
    onSubmit(data.email, data.password);
    reset();
  };

  return (
    <FormStyled onSubmit={handleSubmit(handleSubmitCustom)}>
      <TextField
        label="Email"
        error={!!errors.email}
        helperText={errors.email ? errors.email.message : ""}
        {...register('email', {
          required: 'Email is required field',
          pattern: {
            value:
              /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
            message: 'Please, enter valid e-mail',
          },
        })}
        type="email"
      />
{/* 
      <ErrorWrapper>
        {errors?.email && (
          <ErrorMessage>{errors?.email.message || 'Error'}</ErrorMessage>
        )}
      </ErrorWrapper> */}

      <TextField
        label="Password"
        type="password"
        error={!!errors.password}
        helperText={errors.password ? errors.password.message : ""}
        {...register('password', {
          required: 'Password is required field',
          minLength: {
            value: 8,
            message: 'Min length 8 chars',
          },
          maxLength: {
            value: 10,
            message: 'Max length 10 chars',
          },
        })}
      />
      {/* <ErrorWrapper>
        {errors?.password && (
          <ErrorMessage>{errors?.password.message || 'Error'}</ErrorMessage>
        )}
      </ErrorWrapper> */}
      <Button type="submit" variant="contained" disabled={!isValid}>
        {event}
      </Button>
    </FormStyled>
  );
};
