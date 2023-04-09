// import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from 'redux/operations';

import { getContacts, getFilter } from 'redux/selectors';
import css from '../ContactList/ContactList.module.css';

export function ContactItem() {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);
  function getFilterContacts() {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  }
  const filteredContacts = getFilterContacts();
  return (
    <>
      {filteredContacts.map(({ name, phone, id }) => (
        <li className={css.item} key={id}>
          <p>
            {name}: {phone}
          </p>
          <button onClick={() => dispatch(deleteContact(id))}>Delete</button>
        </li>
      ))}
    </>
  );
}
