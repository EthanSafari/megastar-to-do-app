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
            display={'flex'}
            flexDirection={'column'}
            justifyContent={'flex-end'}
            // alignItems={'center'}
            bottom={3}
        // pr={20}
        >
            <Box
                height={'125px'}
                width={'115px'}
                backgroundColor={'#070417'}
                // right={130}
                position={'absolute'}
                bottom={-10}
                borderRadius={'0 60px 0 0'}

            />
            <Box
                width={'115px'}
                height={'115px'}
                backgroundColor={'rgb(63,60,77)'}
                // bottom={10}
                position={'absolute'}
                borderRadius={'100px'}
                display={'flex'}
                justifyContent={'center'}
                alignItems={'center'}
            // right={130}
            >
                <IconButton
                    sx={{
                        backgroundColor: 'rgba(255,255,255,1)',
                        // position: 'absolute',
                        // right: 80,
                        // bottom: 30,
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
                        color="primary"
                    />
                </IconButton>
            </Box>
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
