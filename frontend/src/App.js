import React from 'react';
import { Container } from 'react-bootstrap'; 
import Header from './components/Header';
import Footer from './components/Footer';
import HomeScreeen from './screens/HomeScreen';

const App = () => {
  return (
    <>
    <Header />
    <main className='py-3'>
      <Container>
        <HomeScreeen />
      </Container>
    </main>
    <Footer />  
    </>
  );
}

export default App;
