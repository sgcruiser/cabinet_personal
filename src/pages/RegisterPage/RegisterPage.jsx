import { useEffect } from 'react';
import { useSelector } from 'react-redux';

import { authSelectors } from '../../redux/auth';

import Title from '../../components/Title';
import RegisterForm from '../../components/RegisterForm';
import Loader from '../../components/Loader';

export default function RegisterPage() {
  const isLoading = useSelector(authSelectors.getLoading);

  useEffect(() => {
    document.title = 'Create account | Personal Cabinet';
  }, []);

  return (
    <main>
      <Title>Create your account</Title>

      <RegisterForm />

      {isLoading && <Loader />}
    </main>
  );
}
