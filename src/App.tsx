import React from 'react';
import './App.css';
import {Tabs} from '@chakra-ui/react'
import Body from './Body';
import Nav from './Nav';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>I'm Zak Lang</h1>
        <Tabs align="center">
          <Nav/>
          <Body/>
        </Tabs>
      </header>
      <main>

      </main>
      <footer>

      </footer>
    </div>
  );
}

export default App;
