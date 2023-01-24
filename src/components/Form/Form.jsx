// import { Button, TextField } from '@mui/material';
import { useState } from 'react';

export const Form = ({ event, onSubmit }) => {
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');

  const handleSubmitCustom = e => {
    e.preventDefault();
    onSubmit(email, pass);
  };

  return (
    <form onSubmit={handleSubmitCustom}>
      <input
        type="email"
        value={email}
        onChange={e => setEmail(e.target.value)}
        placeholder="email"
      />

      <input
        type="password"
        value={pass}
        onChange={e => setPass(e.target.value)}
        placeholder="password"
      />
      <button type="submit">{event}</button>
    </form>
  );
};
