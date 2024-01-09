import React from 'react';
import './App.css';

import { Box, Link as ChakraLink, Stack } from '@chakra-ui/react'
import { Link as ReactRouterLink, Outlet } from 'react-router-dom';

export default function App() {
  return (
    <div>
      <header>
        <Stack direction={{base: 'column', sm: 'row'}}>
          <Box>
            <h1>I'm Zak Lang</h1>
          </Box>
          <Stack direction={{ base: "column", sm: "row" }}>
            <ChakraLink as={ReactRouterLink} to="">My Work</ChakraLink>
            <ChakraLink as={ReactRouterLink} to="about">About Me</ChakraLink>
            <ChakraLink as={ReactRouterLink} to="adventures">Adventures</ChakraLink>
            <ChakraLink as={ReactRouterLink} to="contact">Contact</ChakraLink>
          </Stack>
        </Stack>
      </header>
      <main>
        <Outlet/>
      </main>
    </div>
  );
}
