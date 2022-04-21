import { useCallback } from 'react';
import { useAppSelector, useAppDispatch } from '../../redux/hook';
import { authSelectors, authOperations } from '../../redux/auth';

import styles from './UserMenu.module.scss';

// Компонент меню пользователя после авторизации

type TUserMenu = () => JSX.Element;

const UserMenu: TUserMenu = () => {
  const email = useAppSelector(authSelectors.getUserEmail);

  const dispatch = useAppDispatch();

  const onLogout = useCallback(
    () => dispatch(authOperations.logOut()),
    [dispatch],
  );

  return (
    <div className={styles.profile}>
      <div className={styles.thumb}>
        <img
          src={`https://eu.ui-avatars.com/api/?background=79bbda&color=cf735b&length=1&font-size=0.618&name=${email}`}
          alt="avatar"
          title="Your avatar"
          className={styles.avatar}
        />
      </div>

      <span className={styles.welcome}>
        Welcome, <span className={styles.email}>{email}</span>
      </span>

      <button
        type="button"
        title="Log out"
        aria-label="Log out"
        onClick={onLogout}
        className={styles.button}
      >
        Logout
      </button>
    </div>
  );
};

export default UserMenu;
