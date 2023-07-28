import { AppBar, Box, Button, ButtonGroup, IconButton, Typography } from "@mui/material"
import MenuIcon from '@mui/icons-material/Menu';
import { useContext } from "react";
import { TodoContext } from "../context/TodoContext";

const Navbar = () => {
    const { open, setOpen } = useContext(TodoContext);
    return (
        <AppBar
            position="static"
        >
            <Box
                display={'flex'}
                justifyContent={'space-between'}
                mb={3}
                px={5}
            >
                <Typography
                    variant="h4"
                    display={'flex'}
                    alignItems={'center'}
                >
                    ToDo's
                </Typography>
                <IconButton
                    size="large"
                    color="inherit"
                >
                    <MenuIcon
                        fontSize='large'
                    />
                </IconButton>
            </Box>
            <ButtonGroup
                variant="text"
                color="secondary"
                fullWidth
            >
                <Button
                    onClick={() => setOpen(true)}
                    sx={open && {
                        backgroundColor: 'rgba(189,189,189, .15)'
                    }}
                >
                    Open
                </Button>
                <Button
                    onClick={() => setOpen(false)}
                    sx={!open && {
                        backgroundColor: 'rgba(189,189,189, .15)'
                    }}
                >
                    Closed
                </Button>
            </ButtonGroup>
        </AppBar>
    )
};

export default Navbar;
