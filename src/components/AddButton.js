import { Box, IconButton, Modal } from "@mui/material";
import AddIcon from '@mui/icons-material/Add';
import { useContext } from "react";
import TodoForm from "./TodoForm";
import { TodoContext } from "../context/TodoContext";

const AddButton = () => {
    const { openModal, setOpenModal } = useContext(TodoContext)
    return (
        <Box
            position={'fixed'}
            height={'100vh'}
            width={'100vw'}
        >
            <IconButton
                sx={{
                    backgroundColor: 'rgba(255,255,255,1)',
                    position: 'absolute',
                    right: 30,
                    bottom: 30,
                    height: '75px',
                    width: '75px',
                    zIndex: 2
                }}
                variant="contained"
                disableRipple
                onClick={() => setOpenModal(true)}
            >
                <AddIcon
                    fontSize="large"
                />
            </IconButton>
            <Modal
                open={openModal}
                onClose={() => setOpenModal(false)}
            >
                <TodoForm setOpenModal={setOpenModal} />
            </Modal>
        </Box>
    )
};

export default AddButton;
