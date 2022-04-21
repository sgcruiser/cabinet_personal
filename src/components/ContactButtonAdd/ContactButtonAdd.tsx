import { useAppSelector } from '../../redux/hook';

import { contactsSelectors } from '../../redux/contacts';

import styles from './ContactButtonAdd.module.scss';

const ContactButtonAdd = () => {
  const isLoading = useAppSelector(state =>
    contactsSelectors.getLoading(state),
  );

  return (
    <div className={styles.container}>
      <button type="submit" className={styles.button} disabled={isLoading}>
        Add contact
      </button>
    </div>
  );
};

export default ContactButtonAdd;
