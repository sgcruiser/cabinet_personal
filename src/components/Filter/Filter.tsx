import { useCallback } from 'react';
import { useAppSelector, useAppDispatch } from '../../redux/hook';

import { contactsSelectors, contactsActions } from '../../redux/contacts';

import styles from './Filter.module.scss';

const Filter = () => {
  const value = useAppSelector(contactsSelectors.getFilter);
  const isLoading = useAppSelector(contactsSelectors.getLoading);

  const dispatch = useAppDispatch();

  // Диспатчит в экшн значение инпута
  const onChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      dispatch(contactsActions.changeFilter(event.currentTarget.value));
    },
    [dispatch],
  );

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Contacts</h2>

      <label className={styles.label}>
        <span className={styles.text}>Find contacts by name</span>

        <input
          type="text"
          name="filter"
          placeholder="Find"
          className={styles.input}
          value={value}
          onChange={onChange}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Find contacts by name"
          disabled={isLoading}
          required
        />
      </label>
    </div>
  );
};

export default Filter;
