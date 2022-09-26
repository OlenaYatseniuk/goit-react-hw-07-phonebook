import ContactForm from './ContactForm';
import ContactsList from './ContactsList';
import Container from './Container';
import Section from './Section';
import Filter from './Filter';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export function App() {
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
        </Container>
      </Section>
      <ToastContainer position="top-right" autoClose={3000} />
    </>
  );
}
