import './App.css';
import SearchBox from './SearchBox/SearchBox';
import ContactList from './ContactList/ContactList';
import ContactForm from './ContactForm/ContactForm';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from '../redux/contactsOps';
import { selectError, selectLoading } from '../redux/selectors';


function App() {
  const dispatch = useDispatch()
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts())
  }, [dispatch]);

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm/>
      <SearchBox/>
      {loading && !error && <p>Request in progress...</p>}
      <ContactList/>
    </div>
    );
};

export default App
