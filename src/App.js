import { Box } from '@mui/material';
import React, { useEffect } from 'react';
import TopMenu from './components/TopMenu';
import ToDos from './components/ToDos';
import { useDispatch } from "react-redux";
import { getAllTodos } from './store/todos';

function App() {
  const dispatch = useDispatch()
  // const [todos, setTodos] = useState([]);
  // useEffect(() => {
  //   const getData = async () => {
  //     try {
  //       const data = await fetch('https://jsonplaceholder.typicode.com/todos');
  //       const jsonData = await data.json();
  //       setTodos(jsonData);
  //       return;
  //     } catch (error) {
  //       console.log(error)
  //     }
  //   }
  //   getData();
  // }, []);

  useEffect(() => {
    dispatch(getAllTodos());
  }, [dispatch]);

  return (
    <>
      <Box>
        <TopMenu />
        {/* <ToDos todos={todos} /> */}
      </Box>
    </>
  );
}

export default App;
