import React from 'react';
import './App.css';

import { Box, Link as ChakraLink, Stack } from '@chakra-ui/react'
import { NavLink as ReactRouterLink, Outlet } from 'react-router-dom';
import { strings_en } from './strings-en';

export default function App() {
  return (
    <div className='base'>
      <header>
        <Stack direction={{ base: 'column', md: 'row' }}>
          <Box>
            <h1>{strings_en.header_slogan}</h1>
          </Box>
          <Stack align={{ md: 'flex-end' }} direction={{ base: 'column', md: 'row' }}>
            <ChakraLink as={ReactRouterLink} to=''>{strings_en.header_nav_home}</ChakraLink>
            <ChakraLink as={ReactRouterLink} to='about'>{strings_en.header_nav_about}</ChakraLink>
            <ChakraLink as={ReactRouterLink} to='adventures'>{strings_en.header_nav_adventures}</ChakraLink>
            <ChakraLink as={ReactRouterLink} to='contact'>{strings_en.header_nav_contact}</ChakraLink>
          </Stack>
        </Stack>
      </header>
      <main>
        <Outlet/>
      </main>
    </div>
  );
}
