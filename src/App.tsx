import React from 'react';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { Header } from './components/Header/Header'
import { Dashboard } from './components/Dashboard/Dashboard';

function App() {
  return (
    <div className="App">
      <Header pageName={"Mars Workouts"}></Header>
      <Dashboard/>
    </div>
  );
}

export default App;
