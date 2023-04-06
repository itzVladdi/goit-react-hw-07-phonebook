import { useSelector } from 'react-redux';
import { getContacts } from 'redux/selectors';

import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';

export function App() {
  const contacts = useSelector(getContacts);

  return (
    <>
      <h1 style={{ textAlign: 'center', margin: '10px 0 10px 0' }}>
        Phonebook
      </h1>
      <ContactForm />
      <h2 style={{ textAlign: 'center', margin: '10px 0 10px 0' }}>Contacts</h2>
      {contacts.length > 0 ? (
        <>
          <Filter />
          <ContactList />
        </>
      ) : (
        <p style={{ textAlign: 'center', margin: '10px 0 10px 0' }}>
          You don't have contacts yet!
        </p>
      )}
    </>
  );
}
