import { useEffect } from 'react';
import { useSelector } from 'react-redux';

import { authSelectors } from '../../redux/auth';

import Title from '../../components/Title';
import LoginForm from '../../components/LoginForm';
import Loader from '../../components/Loader';

export default function LoginPage() {
  const isLoading = useSelector(authSelectors.getLoading);

  useEffect(() => {
    document.title = 'Log in to App | Personal Cabinet';
  }, []);

  return (
    <main>
      <Title>Log in to Personal Cabinet</Title>

      <LoginForm />

      {isLoading && <Loader />}
    </main>
  );
}
