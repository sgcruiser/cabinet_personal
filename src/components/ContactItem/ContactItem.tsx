import { useCallback } from 'react';
import { useAppDispatch } from '../../redux/hook';

import { contactsOperations } from '../../redux/contacts';

import IconButton from '../IconButton';
import { ReactComponent as DeleteIcon } from '../../assets/images/delete.svg';

import styles from './ContactItem.module.scss';

type TContact = {
  id: string;
  name: string;
  number: string;
};

interface IContactItem {
  contact: TContact;
}

const ContactItem = ({ contact }: IContactItem) => {
  const dispatch = useAppDispatch();

  const onDeleteContact = useCallback(
    id => {
      dispatch(contactsOperations.deleteContact(id));
    },
    [dispatch],
  );

  return (
    <li className={styles.item}>
      <span className={styles.name}>{contact.name}</span>
      <a href={`tel:${contact.number}`} className={styles.number}>
        {contact.number}
      </a>

      <IconButton
        onClick={() => onDeleteContact(contact.id)}
        aria-label="Delete contact"
      >
        <DeleteIcon width="20px" height="20px" fill="#a7a1a1" />
      </IconButton>
    </li>
  );
};

export default ContactItem;
