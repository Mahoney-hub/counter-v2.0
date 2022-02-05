import React from 'react';
import {Box, Button, ButtonGroup, Paper, Typography} from '@mui/material';

type CounterPropsType = {
    count: number
    error: boolean
    increaseValue: () => void
    resetValue: () => void
}

export const Counter = (props: CounterPropsType) => {
    const {count, error, increaseValue, resetValue} = props
    return (
        <Paper elevation={24} className={'block'}>
            <Box className={'counter'}>
                <Typography color={(error) ? 'red' : 'black'} variant={'h1'}>{count}</Typography>
            </Box>
            <ButtonGroup color={'primary'} variant="contained" size="large" fullWidth>
                <Button onClick={increaseValue} disabled={error}>increase</Button>
                <Button onClick={resetValue} disabled={(count === 0)}>reset</Button>
            </ButtonGroup>
        </Paper>
    );
};

