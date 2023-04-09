import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from 'redux/operations';
import { getContacts, getError, getIsLoading } from 'redux/selectors';

import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import { Loader } from './Loader/Loader';
import css from './App.module.css';

export function App() {
  const contacts = useSelector(getContacts);
  const isLoading = useSelector(getIsLoading);
  const error = useSelector(getError);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <h1 className={css.mainTitle}>Phonebook</h1>
      <ContactForm />
      <h2 className={css.title}>Contacts</h2>

      {contacts.length > 0 ? (
        <>
          <Filter />
          <Loader />
          {!isLoading && !error && <ContactList />}
          {error && <p className={css.errorText}>{error}</p>}
        </>
      ) : (
        <>
          <Loader />
          {isLoading || Boolean(error) || (
            <p className={css.text}>You don't have contacts yet!</p>
          )}
          {error && <p className={css.errorText}>{error}</p>}
        </>
      )}
    </>
  );
}
