import { useSelector } from 'react-redux';
import {  selectFilteredContacts } from '../../redux/contactsSlice';


import Contact from '../Contact/Contact';
import styles from './ContactList.module.css'

const ContactList = () => {
// const contacts = useSelector(selectContacts);
// const filter = useSelector(selectNameFilter);

const contacts = useSelector(selectFilteredContacts);
// contacts.filter(user => user.name.toLowerCase().includes(filter.toLowerCase()));

  return (
    <ul className={styles.list}>
      {contacts.map(contact => {
        return (
        <li key={contact.id} className={styles.item}>
          <Contact
          name={contact.name}
          number={contact.number}
          id={contact.id}
          />
        </li>
      )})}
    </ul>
  )
}

export default ContactList