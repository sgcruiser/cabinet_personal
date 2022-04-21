import { useEffect } from 'react';
import { useSelector } from 'react-redux';

import { authSelectors } from '../../redux/auth';

import Title from '../../components/Title';
import RegisterForm from '../../components/RegisterForm';
import Loader from '../../components/Loader';

const RegisterPage = () => {
  const isLoading = useSelector(authSelectors.getLoading);

  useEffect(() => {
    document.title = 'Create account | Personal Cabinet';
  }, []);

  return (
    <main>
      <Title>Create your account</Title>

      <RegisterForm onSubmit={cred => console.log(cred)} />

      {isLoading && <Loader />}
    </main>
  );
};

export default RegisterPage;
