import { useSelector } from 'react-redux';
import { selectContacts } from '../../redux/contactsSlice';
import { selectNameFilter } from '../../redux/filtersSlice';

import Contact from '../Contact/Contact';
import styles from './ContactList.module.css'

const ContactList = () => {
const contacts = useSelector(selectContacts);
const filter = useSelector(selectNameFilter);

const visibleContacts = contacts.filter(user => user.name.toLowerCase().includes(filter.toLowerCase()));

  return (
    <ul className={styles.list}>
      {visibleContacts.map(user => {
        return (
        <li key={user.id} className={styles.item}>
          <Contact
          name={user.name}
          number={user.number}
          id={user.id}
          />
        </li>
      )})}
    </ul>
  )
}

export default ContactList