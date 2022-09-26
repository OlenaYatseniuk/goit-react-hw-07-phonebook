import ContactForm from './ContactForm';
import ContactsList from './ContactsList';
import Container from './Container';
import Section from './Section';
import Filter from './Filter';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useSelector } from 'react-redux';
import Loader from './Loader';


export function App() {
  const {isLoading} = useSelector(state => state.items.contacts);
  console.log(isLoading)
  return (
    <>
      <Section title="PhoneBook">
        <Container>
          <ContactForm />
        </Container>
      </Section>
      <Section title="Contacts">
        <Container>
          {isLoading && <Loader/>}
          <Filter />
          <ContactsList />
        </Container>
      </Section>
      <ToastContainer position="top-right" autoClose={3000} />
    </>
  );
}
