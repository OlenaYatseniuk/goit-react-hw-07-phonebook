import ContactForm from './ContactForm';
import ContactsList from './ContactsList';
import Container from './Container';
import Section from './Section';
import Filter from './Filter';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// import { useSelector } from 'react-redux';
// import { getALLContacts } from 'redux/contacts/selectors.contacts';

export function App() {
  // const contacts = useSelector(getALLContacts);

  return (
    <>
      <Section title="PhoneBook">
        <Container>
          <ContactForm />
        </Container>
      </Section>
      <Section title="Contacts">
        <Container>
        <Filter />
              <ContactsList />

          {/* {contacts.length ? (
            <>
              <Filter />
              <ContactsList />
            </>
          ) : (
            <div>There are no contacts here=( Please add a new contact.</div>
          )} */}
        </Container>
      </Section>
      <ToastContainer position="top-right" autoClose={3000} />
    </>
  );
}
