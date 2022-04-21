import { useAppSelector } from '../../redux/hook';

import { authSelectors } from '../../redux/auth';

import Navigation from '../Navigation';
import AuthNav from '../AuthNav';
import UserMenu from '../UserMenu';

import styles from './AppBar.module.scss';

const AppBar = () => {
  const isAuthenticated = useAppSelector(authSelectors.getIsAuthenticated);

  return (
    <header className={styles.header}>
      <Navigation />

      {isAuthenticated ? <UserMenu /> : <AuthNav />}
    </header>
  );
};

export default AppBar;
