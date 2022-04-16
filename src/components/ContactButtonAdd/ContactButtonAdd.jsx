import { useSelector } from 'react-redux';

import { contactsSelectors } from '../../redux/contacts';

import styles from './ContactButtonAdd.module.scss';

export default function ContactButtonAdd() {
  const isLoading = useSelector(state => contactsSelectors.getLoading(state));

  return (
    <div className={styles.container}>
      <button type="submit" className={styles.button} disabled={isLoading}>
        Add contact
      </button>
    </div>
  );
}
