import { Box, Card, IconButton, Typography } from "@mui/material";
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import { useSelector } from 'react-redux';
import { useContext } from "react";
import { TodoContext } from "../context/TodoContext";

const ToDos = () => {
    const { open } = useContext(TodoContext);
    const todos = useSelector(state => open ?
        Object.values(state.todos.todos).filter(todo => !todo.completed)
        : Object.values(state.todos.todos).filter(todo => todo.completed));
    return (
        <Box
            pt={31}
            pb={5}
            display={'flex'}
            flexDirection={'column'}
            alignItems={'center'}
            pl={1}
        >
            {todos.length > 0 && todos.map(({ userId, id, title, completed }) => (
                <Card
                    sx={{
                        mx: 5,
                        width: '93%',
                        p: 2,
                        my: 1,
                        display: "flex",
                        justifyContent: 'space-between'
                    }}
                    key={id}
                >
                    <Box
                        display={'flex'}
                        alignItems={'center'}
                    >
                        {!completed ? (
                            <RadioButtonUncheckedIcon
                                fontSize="large"
                                sx={{
                                    color: 'red',
                                    mr: 2
                                }}
                            />
                        ) : (
                            <CheckCircleOutlineIcon
                                fontSize="large"
                                sx={{
                                    color: '#32de84',
                                    mr: 2
                                }}
                            />
                        )}
                        <Box>
                            <Typography>
                                {title}
                            </Typography>
                            <Typography
                                variant="subtitle2"
                                sx={{
                                    backgroundColor: 'rgb(63,60,78)',
                                    width: 'fit-content',
                                    px: '4px',
                                    mt: 1,
                                    borderRadius: '3px',
                                    color: 'rgb(189,189,189)'
                                }}
                            >
                                User: {userId}
                            </Typography>
                        </Box>
                    </Box>
                    <IconButton

                    >
                        <MoreHorizIcon sx={{ color: 'white' }} />
                    </IconButton>
                </Card>
            ))}
        </Box>
    )
};

export default ToDos;
