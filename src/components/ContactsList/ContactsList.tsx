import { useAppSelector } from '../../redux/hook';

import { contactsSelectors } from '../../redux/contacts';

import ContactItem from '../ContactItem';

import styles from './ContactsList.module.scss';

const ContactsList = () => {
  const contacts = useAppSelector(contactsSelectors.getfilteredContacts); // Селектор всех контактов

  return (
    <ul className={styles.list}>
      {contacts.map(contact => (
        <ContactItem key={contact.id} contact={contact} />
      ))}
    </ul>
  );
};

export default ContactsList;
