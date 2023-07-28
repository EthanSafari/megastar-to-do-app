import { Box } from '@mui/material';
import React, { useEffect } from 'react';
import TopMenu from './components/TopMenu';
import ToDos from './components/ToDos';
import { useDispatch } from "react-redux";
import { getAllTodos } from './store/todos';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllTodos());
  }, [dispatch]);

  return (
    <>
      <Box>
        <TopMenu />
        <ToDos />
      </Box>
    </>
  );
};

export default App;
