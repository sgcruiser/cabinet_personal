import { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import routes from '../../routes';

import Title from '../../components/Title';
import { ReactComponent as SpaceImage } from '../../assets/images/404_error_page.svg';

import styles from './PageNotFound.module.scss';

export default function PageNotFound() {
  useEffect(() => {
    document.title = 'Error 404 | Personal Cabinet';
  }, []);

  return (
    <div className={styles.container}>
      <Title>What's wrong?</Title>

      <div className={styles.thumb}>
        <SpaceImage
          title="Error 404"
          alt="Error 404"
          className={styles.image}
        />
      </div>

      <ul className="styles.list">
        <li className="styles.item">
          <p className={styles.text}>
            The page you are looking for has been deleted, renamed or lost.
          </p>
          <li className="styles.item">
            <p className={styles.text}>Please click the button below.</p>
          </li>
        </li>
      </ul>

      <NavLink
        type="button"
        to={routes.home}
        className={styles.button}
        title="Return to Home"
        aria-label="Return to Home page"
      >
        Welcome to Home
      </NavLink>
    </div>
  );
}
