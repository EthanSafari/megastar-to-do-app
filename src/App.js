import { Box } from '@mui/material';
import React, { useEffect } from 'react';
import TopMenu from './components/TopMenu';
import ToDos from './components/ToDos';
import { useDispatch } from "react-redux";
import { getAllTodos } from './store/todos';
import AddButton from './components/AddButton';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllTodos());
  }, [dispatch]);

  return (
    <>
      <AddButton />
      <Box>
        <TopMenu />
        <ToDos />
      </Box>
    </>
  );
};

export default App;
