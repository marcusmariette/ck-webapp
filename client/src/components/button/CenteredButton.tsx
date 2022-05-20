import React from 'react';
import { Box, Button } from '@mui/material';

type CenteredButtonProps = {
    text: string;
    href: string;
};

const CenteredButton: React.FC<CenteredButtonProps> = ({ text, href }) => {
    return (
        <Box textAlign={'center'} paddingBottom={2}>
            <Button color={'secondary'} variant={'contained'} size={'large'} href={href}>
                {text}
            </Button>
        </Box>
    );
};

export default CenteredButton;
