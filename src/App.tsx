import React from 'react';
import { Header } from './components/Header/Header'
import { DashboardPage } from './components/DashboardPage/DashboardPage';
import { Footer } from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Header/>
      <DashboardPage/>
      <Footer/>
    </div>
  );
}

export default App;
