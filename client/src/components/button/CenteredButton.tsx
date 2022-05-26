import { Box, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const CenteredButton = ({ link, text }) => {
    const navigate = useNavigate();

    return (
        <Box textAlign={'center'} paddingBottom={2}>
            <Button color={'secondary'} variant={'contained'} size={'large'} onClick={() => navigate(link)}>
                {text}
            </Button>
        </Box>
    );
};

export default CenteredButton;
