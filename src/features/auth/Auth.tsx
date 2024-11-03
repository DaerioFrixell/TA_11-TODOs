import { FormEvent, useState } from 'react';
import { useAuthenticated, useAuth } from './hooks';
import { useNavigate } from 'react-router-dom';
import { FormItem } from './form-item';
import { ErrorMessage } from './error-message';

import './auth.scss'
import { Button } from '../../shared/ui/components/button';

export const Auth = () => {
  useAuth();

  const navigate = useNavigate();
  const { handleAuthenticated } = useAuthenticated();

  const [isWrongCreds, setIsWrongCreds] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (username === 'admin' && password === 'admin') {
      localStorage.setItem('user', JSON.stringify({ username }));

      handleAuthenticated();
      navigate('/');
    } else {
      setIsWrongCreds(true)
    }
  };

  const closeError = () => {
    setIsWrongCreds(false)
  };

  return (
    <div className='auth'>
      <ErrorMessage isWrongCreds={isWrongCreds} onClick={closeError} />

      <form onSubmit={handleLogin}>
        <FormItem
          label='*Логин:'
          placeholder='введите логин'
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
          autoComplete="username"
          autoFocus={true}
        />

        <FormItem
          label='*Пароль:'
          placeholder='введите пароль'
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          autoComplete="current-password"
        />

        <Button className='button-standard' text='Войти' type="submit" />
      </form>
    </div>
  );
};
