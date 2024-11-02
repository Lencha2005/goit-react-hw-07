import { ErrorMessage, Field, Form, Formik } from 'formik';
import * as Yup from "yup";
import { useDispatch } from 'react-redux';
import { addContact } from '../../redux/contactsOps';

import styles from './ContactForm.module.css';

const numberRegex =
  /^[+]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4,6}$/;

const ContactFormSchema = Yup.object().shape({
  name: Yup.string().min(2, 'Too short!').max(20, 'Too long!').required('Field is required!'),
  number: Yup.string().matches(numberRegex, "Invalid phone number. Phone must be +380XXXXXXXXX").required('Field is required!'),
})

const initialValues = {
  name: "",
  number: "",
};

const ContactForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (values, actions) => {
    dispatch(addContact(values));
    actions.resetForm();
  };

  return (
    <Formik initialValues={initialValues} onSubmit={handleSubmit} validationSchema={ContactFormSchema}>
      <Form className={styles.form}>
        <label className={styles.label}>
          <p className={styles.text}>Name</p>
          <Field className={styles.input} type="text" name="name" />
          <ErrorMessage className={styles.error} name="name" component="span" />
        </label>
        <label className={styles.label}>
        <p className={styles.text}>Number</p>
          <Field className={styles.input} type="text" name="number" />
          <ErrorMessage className={styles.error} name="number" component="span" />
        </label>
        <button className={styles.btn} type="submit">Add contact</button>
      </Form>
    </Formik>
  )
}

export default ContactForm