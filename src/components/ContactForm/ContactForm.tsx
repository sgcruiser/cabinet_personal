import { useState, useCallback } from 'react';
import { useAppSelector, useAppDispatch } from '../../redux/hook';
import { toast } from 'react-toastify';

import { contactsOperations, contactsSelectors } from '../../redux/contacts';

import ContactButtonAdd from '../ContactButtonAdd';

import styles from './ContactForm.module.scss';

const initialState = {
  name: '',
  number: '',
};

interface Props {
  onSubmit: (cred: { name: string; number: string }) => void;
}

type Tcontact = (name: string, number: string) => void;

// interface Icontacts {
//   contact: Tcontact;
// }

const ContactForm = ({ onSubmit }: Props) => {
  const [state, setState] = useState(initialState);
  const { name, number } = state;

  const contacts = useAppSelector(contactsSelectors.getContacts);
  const isLoading = useAppSelector<boolean>(contactsSelectors.getLoading);

  const dispatch = useAppDispatch();

  const dispatchAddContact = useCallback<Tcontact>(
    (name, number) => {
      dispatch(contactsOperations.addContact(name, number));
    },
    [dispatch],
  );

  // Следим за инпутом
  const hanldeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.currentTarget;

    setState(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  // Метод на отправке формы
  const hanldeSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const normalizedName = name.toLowerCase();

    // Проверка на дубликат по имени
    const nameInContacts = contacts.find(
      contact => contact.name === normalizedName,
    );

    // Проверка на дубликат по номеру

    const numberInContacts = contacts.find(
      contact => contact.number === number,
    );

    // Отправка имени и номера после проверки
    if (!nameInContacts && !numberInContacts) {
      dispatchAddContact(normalizedName, number);

      resetForm();
      return;
    }

    toast.warn(`!${name} is already in contacts`);
  };

  const resetForm = () => {
    setState(initialState);
  };

  return (
    <form className={styles.form} onSubmit={hanldeSubmit}>
      <label className={styles.label}>
        <span className={styles.text}>Name</span>

        <input
          type="text"
          name="name"
          placeholder="Contact name"
          aria-label="Input for your name"
          className={styles.input}
          value={name}
          onChange={hanldeChange}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
          disabled={isLoading}
          required
        />
      </label>

      <label className={styles.label}>
        <span className={styles.text}>Number</span>

        <input
          type="tel"
          name="number"
          placeholder="Phone number"
          aria-label="Input for your phone number"
          className={styles.input}
          value={number}
          onChange={hanldeChange}
          pattern="(\+?( |-|\.)?\d{1,2}( |-|\.)?)?(\(?\d{3}\)?|\d{3})( |-|\.)?(\d{3}( |-|\.)?\d{4})"
          title="Номер телефона должен состоять из 11-12 цифр и может содержать цифры, пробелы, тире, пузатые скобки и может начинаться с +"
          disabled={isLoading}
          required
        />
      </label>

      <ContactButtonAdd />
    </form>
  );
};

export default ContactForm;
