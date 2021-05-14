import React from 'react';

import Container from './components/Container/Container';
import Header from './components/Header/Header';
import HomeScreen from './screens/HomeScreen';
import Footer from './components/Footer/Footer';
import LastText from './components/LastText/LastText';
import ScrollArrow from './components/ScrollArrow/ScrollArrow';
import './App.scss';

const App = () => {
  return (
    <div className='App'>
      <Container>
        <ScrollArrow />
        <Header />
        <HomeScreen />
        <Footer />
        <LastText />
      </Container>
    </div>
  );
};

export default App;
