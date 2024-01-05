import React from 'react';
import './App.css';
import {Tabs, TabList, Tab, TabPanels, TabPanel} from '@chakra-ui/react'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>My Web App</h1>
        <Tabs align="center">
          <TabList>
            <Tab>Home</Tab>
            <Tab>About</Tab>
            <Tab>Content</Tab>
            <Tab>Contact</Tab>
          </TabList>
          <TabPanels>
            <TabPanel>This is the Home Page</TabPanel>
            <TabPanel>This is the About Page</TabPanel>
            <TabPanel>This is the Content Page</TabPanel>
            <TabPanel>This is the Contact Page</TabPanel>
          </TabPanels>
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
