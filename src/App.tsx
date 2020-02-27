import React, { useState } from 'react';

import { StarwarsPeople } from './StarwarsPeople';

import './App.css';
import debounce from 'lodash.debounce';

function App() {
  const [name, setName] = useState();

  const setNameDebounced = debounce((value) => {
    setName(value);
  }, 300);

  const handleFilterByName = (event: any) => {
    setNameDebounced(event.target.value);
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>Starwars People</h1>
        <input className="filter-by-name" placeholder="Filter by name" type="text" onChange={handleFilterByName} />
        <StarwarsPeople name={name} />
      </header>
    </div>
  );
}

export default App;
