import { Box, Card } from '@mui/material';
import React, { useEffect, useState } from 'react';
import TopMenu from './components/TopMenu';
import ToDos from './components/ToDos';

function App() {
  const [todos, setTodos] = useState([]);
  // const getData = async () => {
  //   try {
  //     const data = await fetch('https://jsonplaceholder.typicode.com/todos/1');
  //     const jsonData = await data.json();
  //     console.log(jsonData)

  //   } catch (error) {
  //     console.log(error)
  //   }
  // }
  useEffect(() => {
    const getData = async () => {
      try {
        const data = await fetch('https://jsonplaceholder.typicode.com/todos');
        const jsonData = await data.json();
        setTodos(jsonData);
        return;
      } catch (error) {
        console.log(error)
      }
    }
    getData();
  }, []);

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
        <ToDos todos={todos} />
      </Box>
    </>
  );
}

export default App;
