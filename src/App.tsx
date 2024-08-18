import React from 'react';

import Header from './components/header';
import Aside from './components/aside';
import Estimates from './components/estimates';
import './styles.scss';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Aside />
        <Estimates />
      </main>
    </div>
  );
}

export default App;
