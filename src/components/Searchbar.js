import { Box, IconButton, InputBase, Paper, TextField } from "@mui/material"
import SearchIcon from '@mui/icons-material/Search';

const Searchbar = () => {
    return (
        <Box
            px={5}
            my={3}
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
        </Box>
    )
};

export default Searchbar;
