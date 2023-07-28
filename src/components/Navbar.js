import { AppBar, Box, Button, ButtonGroup, IconButton, Typography } from "@mui/material"
import MenuIcon from '@mui/icons-material/Menu';

const Navbar = () => {
    return (
        <AppBar
            position="static"
        >
            <Box
                display={'flex'}
                justifyContent={'space-between'}
                mb={3}
            >
                <Typography
                    variant="h4"
                    display={'flex'}
                    alignItems={'center'}
                    pl={'12px'}
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
                <Button>
                    Open
                </Button>
                <Button>
                    Closed
                </Button>
            </ButtonGroup>
        </AppBar>
    )
};

export default Navbar;
