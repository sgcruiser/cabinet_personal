import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import Alert from '@material-ui/lab/Alert';

import ContactForm from '../../components/ContactForm';
import Filter from '../../components/Filter';
import ContactsList from '../../components/ContactsList';
import Loader from '../../components/Loader';

import { contactsOperations, contactsSelectors } from '../../redux/contacts';

const ContactsPage = () => {
  const dispatch = useDispatch();

  const isLoadingContacts = useSelector(state =>
    contactsSelectors.getLoading(state),
  );
  const isError = useSelector(state => contactsSelectors.getError(state));

  useEffect(() => {
    dispatch(contactsOperations.fetchContacts());
  }, [dispatch]);

  useEffect(() => {
    document.title = 'Contacts list | Personal Cabinet';
  }, []);

  return (
    <main>
      <ContactForm />

      <Filter />

      <ContactsList />

      {isLoadingContacts && <Loader />}

      {isError && <Alert severity="error">{isError}</Alert>}
    </main>
  );
};

export default ContactsPage;
