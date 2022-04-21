import { useEffect } from 'react';
import { useSelector } from 'react-redux';

import { authSelectors } from '../../redux/auth';

import Title from '../../components/Title';
import LoginForm from '../../components/LoginForm';
import Loader from '../../components/Loader';

const LoginPage = () => {
  const isLoading = useSelector(authSelectors.getLoading);

  useEffect(() => {
    document.title = 'Log in to App | Personal Cabinet';
  }, []);

  return (
    <main>
      <Title>Log in to Personal Cabinet</Title>

      <LoginForm onSubmit={cred => console.log(cred)} />

      {isLoading && <Loader />}
    </main>
  );
};

export default LoginPage;
