import React from 'react';
import {
  ChakraProvider,
  Box,
  VStack,
  Grid,
  theme,
} from '@chakra-ui/react';
import AddSnapshot from './pages/AddSnapshot/AddSnapshot';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Box textAlign="center" fontSize="xl">
        <Grid minH="100vh" p={3}>
          <VStack spacing={8}>
            <AddSnapshot />
          </VStack>
          
        </Grid>
      </Box>
    </ChakraProvider>
  );
}

export default App;
