import { useAppSelector } from '../../redux/hook';
import { NavLink } from 'react-router-dom';

import { authSelectors } from '../../redux/auth';
import routes from '../../routes';

import styles from './Navigation.module.scss';

// Компонент главной навигации (меню) приложения

type TNavigation = () => JSX.Element;

const Navigation: TNavigation = () => {
  const isAuthenticated = useAppSelector(authSelectors.getIsAuthenticated);

  return (
    <nav>
      <ul className={styles.list}>
        <li className={styles.item}>
          <NavLink
            exact
            to={routes.home}
            className={styles.link}
            activeClassName={styles['link--active']}
          >
            Home
          </NavLink>
        </li>

        {isAuthenticated && (
          <li>
            <NavLink
              to={routes.contacts}
              className={styles.link}
              activeClassName={styles['link--active']}
            >
              Contacts
            </NavLink>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Navigation;
