import logo from './logo.svg';
import React from 'react';
import Header from './header';
import Navbar from './Navbar';
import Card from './card';
import Footer from './footer';
import './App.css';

function App() {
  return (
    <div className="App">
    <Header />
    <Navbar />
    <main>
        <Card />
    </main>
    <Footer />
</div>
  );
}

export default App;
