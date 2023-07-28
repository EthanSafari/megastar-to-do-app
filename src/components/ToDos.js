import { Box, Card, Typography } from "@mui/material";

const ToDos = ({ todos }) => {
    return (
        <Box
            pt={31}
            pb={5}
            display={'flex'}
            flexDirection={'column'}
            alignItems={'center'}
            pl={1}
        >
            {todos.length > 0 && todos.map(({userId, id, title, completed}) => (
                <Card
                    sx={{
                        mx: 5,
                        width: '93%',
                        p: 2,
                        my: 1,
                    }}
                >
                    <Typography>
                        {title}
                    </Typography>
                    <Typography>
                        User: {userId}
                    </Typography>
                </Card>
            ))}
        </Box>
    )
};

export default ToDos;
