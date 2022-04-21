import { useEffect } from 'react';
import { NavLink } from 'react-router-dom';

import Title from '../../components/Title';
import { ReactComponent as PersonalDataImage } from '../../assets/images/personal_data.svg';

import routes from '../../routes';

import styles from './HomePage.module.scss';

const HomePage = () => {
  useEffect(() => {
    document.title = 'Cabinet Personal | React Application';
  }, []);

  return (
    <main>
      <section className={styles.container}>
        <Title>Personal Cabinet</Title>

        <div className={styles.thumb}>
          <PersonalDataImage
            title="Start using!"
            // alt="PersonalData"
            className={styles.image}
          />
        </div>

        <p className={styles.text}>
          React application - Directory for personal contacts. Fast, secure, for
          desktop and mobile devices.
        </p>

        <NavLink
          type="button"
          to={routes.contacts}
          className={styles.button}
          title="Start using!"
          aria-label="Go to contacts"
        >
          Start using!
        </NavLink>
      </section>
    </main>
  );
};

export default HomePage;
