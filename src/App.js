import { Button } from '@mui/material';
import React from 'react';
import Homepage from './components/Homepage';

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
    <Homepage />
    </>
  );
}

export default App;
