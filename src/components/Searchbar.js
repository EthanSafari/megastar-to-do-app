import { Box, Container, Divider, IconButton, InputBase, Paper, TextField } from "@mui/material"
import SearchIcon from '@mui/icons-material/Search';

const Searchbar = () => {
    return (
        <Box
            mx={5}
            mt={3}
        >
            {/* <TextField
                variant="filled"
                fullWidth
                color="primary"
                label="Search Todo's"
                sx={{
                    backgroundColor: 'rgb(41,38,57)',
                    borderRadius: '5px'
                }}
            /> */}
            <Paper
                variant="outlined"
                sx={{
                    py: '8px',
                    px: '10px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between'
                }}
            >
                <InputBase
                    placeholder="Search Todo's"
                    fullWidth
                    sx={{ pl: 2 }}
                />
                <IconButton>
                    <SearchIcon color="secondary"/>
                </IconButton>
            </Paper>
            <Container style={{
                borderBottom: '1px solid rgba(83, 81, 96, .7)',
                marginTop: '1.5rem',
                width: '30%'
            }}/>
        </Box>
    )
};

export default Searchbar;
