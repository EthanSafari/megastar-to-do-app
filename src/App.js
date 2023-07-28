import { Box } from '@mui/material';
import React from 'react';
import Navbar from './components/Navbar';
import Searchbar from './components/Searchbar';
import TopMenu from './components/TopMenu';

function App() {
  // const getData = async () => {
  //   try {
  //     const data = await fetch('https://jsonplaceholder.typicode.com/todos/1');
  //     const jsonData = await data.json();
  //     console.log(jsonData)

  //   } catch (error) {
  //     console.log(error)
  //   }
  // }
  return (
    <>
    {/* <Button
    onClick={getData}
    >
      get data
    </Button> */}
    <Box
    >
      <TopMenu />
    </Box>
    </>
  );
}

export default App;
