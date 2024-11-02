import { HiPhone } from "react-icons/hi2";
import { HiUser } from "react-icons/hi2";
import styles from './Contact.module.css'
import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contactsSlice";


const Contact = ( {id, name, number} ) => {
  const dispatch = useDispatch();

  const onDeleteContact = (id) => {
    const action = deleteContact(id);
    dispatch(action);
  };
  return (
    <div className={styles.wrap}>
      <div className={styles.wrapper}>
      <p className={styles.name}><HiUser /> {name}</p>
      <p className={styles.number}><HiPhone /> {number}</p> 
      </div>
      <button type='button' className={styles.btn} onClick={() => onDeleteContact(id)}>Delete</button>
    </div>
  )
}

export default Contact