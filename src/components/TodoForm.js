import { Box, Button, Slide, IconButton, MenuItem, Select, TextField, Typography } from "@mui/material";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import DragHandleIcon from '@mui/icons-material/DragHandle';
import { useState, useContext } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addNewTodo, patchTodoStatus } from "../store/todos";
import { TodoContext } from "../context/TodoContext";

const TodoForm = ({ todo, setAnchorEl }) => {
    const { openModal, setOpenModal } = useContext(TodoContext);
    const todoArr = useSelector(state => Object.values(state.todos.todos));
    const dispatch = useDispatch();
    const [editTodo, setEditTodo] = useState({
        id: todo?.id || todoArr.length + 1,
        userId: todo?.userId || 1,
        title: todo?.title || '',
        completed: todo?.completed || false
    });
    const onChange = (e) => {
        setEditTodo((prev) => ({
            ...prev,
            [e.target.name]: e.target.value,
        }));
    };
    const handleEditSubmit = async (e) => {
        e.preventDefault();
        if (todo) {
            await dispatch(patchTodoStatus(editTodo));
            setAnchorEl(null);
            setOpenModal(false);
        } else {
            await dispatch(addNewTodo({
                userId: editTodo.userId,
                title: editTodo.title,
                completed: editTodo.completed
            }));
            setOpenModal(false);
        }
    };
    return (
        <Slide direction="up" in={!!openModal}>
            <Box
                height={'90vh'}
                width={'100vw'}
                bgcolor={'rgb(7,4,23)'}
                bottom={0}
                position={'fixed'}
                borderRadius={'2.5rem 2.5rem 0 0'}
                display={'flex'}
                flexDirection={'column'}
                alignItems={'center'}
                pb={10}
            >
                <IconButton
                    onClick={() => setOpenModal(false)}
                >
                    <DragHandleIcon
                        fontSize="large"
                        htmlColor="rgb(55,49,87)"
                    />
                </IconButton>
                <Box
                    display={'flex'}
                    alignItems={'center'}
                    justifyContent={'center'}
                    width={'100vw'}
                    mt={4}
                    mb={6}
                >
                    <IconButton
                        onClick={() => setOpenModal(false)}
                        sx={{ position: 'absolute', left: '5%' }}
                    >
                        <ArrowBackIcon fontSize="large" htmlColor="white" />
                    </IconButton>
                    {todo ? (
                        <Typography
                            variant="h4"
                        >
                            Edit Todo
                        </Typography>
                    ) : (
                        <Typography
                            variant="h4"
                        >
                            Add Todo
                        </Typography>
                    )}
                </Box>
                <form
                    onSubmit={handleEditSubmit}
                    style={{
                        width: '80vw',
                        display: 'flex',
                        flexDirection: 'column'
                    }}
                >
                    <Typography ml={2} mt={1}>
                        Todo
                    </Typography>
                    <TextField
                        variant="outlined"
                        sx={{
                            backgroundColor: "rgb(55,49,87)",
                            borderRadius: '5px',
                            margin: '0 0 1rem 0'
                        }}
                        fullWidth
                        multiline
                        value={editTodo.title}
                        name="title"
                        onChange={onChange}
                        placeholder="What do you need todo?"
                        error={editTodo.title.trim().length < 3}
                        helperText={editTodo.title.trim().length < 3 && 'Todos must be at least 3 characters in length.'}
                    />
                    <Typography ml={2} mt={1}>
                        User
                    </Typography>
                    <Select
                        name="userId"
                        value={editTodo.userId}
                        onChange={onChange}
                        fullWidth
                        sx={{
                            backgroundColor: "rgb(55,49,87)",
                            borderRadius: '5px',
                            margin: '0 0 1rem 0'
                        }}
                    >
                        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(userNum => (
                            <MenuItem value={userNum} key={userNum}>{userNum}</MenuItem>
                        ))}
                    </Select>
                    <Typography ml={2} mt={1}>
                        Status
                    </Typography>
                    <Select
                        name="completed"
                        value={editTodo.completed}
                        onChange={onChange}
                        fullWidth
                        sx={{
                            backgroundColor: "rgb(55,49,87)",
                            borderRadius: '5px',
                            margin: '0 0 2rem 0'
                        }}
                    >
                        <MenuItem value={false}>Open</MenuItem>
                        <MenuItem value={true}>Closed</MenuItem>
                    </Select>
                    <Button
                        sx={{ backgroundColor: "#32de84" }}
                        variant="contained"
                        disableRipple={true}
                        type="submit"
                        disabled={editTodo.title.trim().length < 3}
                    >
                        Finish
                    </Button>
                    <Button
                        variant="text"
                        sx={{ color: 'rgba(255,255,255,.8)' }}
                        onClick={() => setOpenModal(false)}
                    >
                        Quit
                    </Button>
                </form>
            </Box>
        </Slide>
    )
};

export default TodoForm;
