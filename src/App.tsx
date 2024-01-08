import React from 'react';
import './App.css';

import { Box, Button, Stack } from '@chakra-ui/react'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Stack direction={{base: 'column', sm: 'row'}}>
          <Box>
            <h1>I'm Zak Lang</h1>
          </Box>
          <Stack direction={{base: "column", sm: "row"}}>
            <Button>My Work</Button>
            <Button>About Me</Button>
            <Button>Adventures</Button>
            <Button>Contact</Button>
          </Stack>
        </Stack>
      </header>
      <main>
        
      </main>
    </div>
  );
}

export default App;
