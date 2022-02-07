import React from 'react';
import {Box, Button, ButtonGroup, Paper, Typography} from '@mui/material';

type CounterPropsType = {
    count: number
    maxValue: number
    startValue: number
    error: boolean
    enteringText: boolean
    setCount: (value: number) => void
}

export const Counter = (props: CounterPropsType) => {
    const {count, maxValue, startValue, error, setCount, enteringText,} = props
    // Functions
    const increaseValue = () => {
        if (count !== maxValue) setCount(count + 1)
    }
    const resetValue = () => {
        if (count !== startValue) setCount(startValue)
    }
    // Components before rendering
    const message = error
        ? <Typography color={'red'} variant={'subtitle1'}>Incorrect value!</Typography>
        : <Typography variant={'subtitle1'}>enter values and press 'set'</Typography>
    const messageOutput = enteringText
        ? message
        : <Typography color={(count === maxValue) ? 'red' : 'black'} variant={'h1'}>{count}</Typography>

    return (
        <Paper elevation={24} className={'block'}>
            <Box className={'counter'}>
                {messageOutput}
            </Box>
            <ButtonGroup color={'primary'} variant="contained" size="large" fullWidth>
                <Button onClick={increaseValue} disabled={count === maxValue}>increase</Button>
                <Button onClick={resetValue} disabled={(count === startValue)}>reset</Button>
            </ButtonGroup>
        </Paper>
    );
};

