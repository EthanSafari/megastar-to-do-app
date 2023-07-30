import { Box, Icon, IconButton, TextField, Typography } from "@mui/material";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import DragHandleIcon from '@mui/icons-material/DragHandle';

const TodoForm = ({ todo, setOpenModal }) => {
    console.log(todo)
    return (
        <Box
            height={'93vh'}
            width={'100vw'}
            bgcolor={'rgb(7,4,23)'}
            bottom={0}
            position={'fixed'}
            borderRadius={'2.5rem 2.5rem 0 0'}
            display={'flex'}
            flexDirection={'column'}
            alignItems={'center'}
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
                fullWidth
            >
                <IconButton
                    onClick={() => setOpenModal(false)}
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
                    <Typography>
                        Add Todo
                    </Typography>
                )}
            </Box>
            <form>
                <TextField
                    label='TODO'
                    variant="standard"
                    sx={{ backgroundColor: "rgb(55,49,87)" }}
                    fullWidth
                    multiline
                />
            </form>
        </Box>
    )
};

export default TodoForm;
