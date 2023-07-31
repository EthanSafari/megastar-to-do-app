import { Box, Container, IconButton, InputBase, Paper } from "@mui/material"
import SearchIcon from '@mui/icons-material/Search';
import { useContext } from "react";
import { TodoContext } from "../context/TodoContext";

const Searchbar = () => {
    const { open, setOpen, search, setSearch } = useContext(TodoContext);
    const notSelected = {
        py: '8px',
        px: '10px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between'
    };
    const selected = {
        ...notSelected,
        backgroundColor: 'rgb(63,60,77)',
    };
    return (
        <Box
            mx={5}
            mt={3}
        >
            <Paper
                variant="outlined"
                sx={open === 2 ? selected : notSelected}
            >
                <InputBase
                    placeholder="Search Todo's"
                    fullWidth
                    sx={{ pl: 2 }}
                    onClick={() => setOpen(2)}
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                />
                <IconButton>
                    <SearchIcon color="secondary" />
                </IconButton>
            </Paper>
            <Container style={{
                borderBottom: '1px solid rgba(83, 81, 96, .7)',
                marginTop: '1.5rem',
                width: '30%',
            }} />
        </Box>
    )
};

export default Searchbar;
