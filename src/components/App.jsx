import './App.css';
import SearchBox from './SearchBox/SearchBox';
import ContactList from './ContactList/ContactList';
import ContactForm from './ContactForm/ContactForm';


function App() {
  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm/>
      <SearchBox/>
      <ContactList/>
    </div>
    );
};

export default App
