import React, {useState} from 'react';
import {Box, Button, ButtonGroup, Paper, TextField, Typography} from '@mui/material';

const App = () => {
    // BLL
    const [count, setCount] = useState<number>(0)
    const [error, setError] = useState<boolean>(false)
    // Functions
    const increaseValue = () => {
        if (!error) setCount(count + 1)
    }
    const resetValue = () => {
        if (count !== 0) setCount(0)
    }

    return (
        <Box className={'container'}>
            <Paper elevation={24} className={'block'}>
                <Box m={2} className={'row'}>
                    <Typography variant={'h6'}>max value:</Typography>
                    <TextField
                        label="Number"
                        type="number"
                        size={'small'}
                        color={'primary'}
                        focused
                        InputLabelProps={{
                            // shrink: true,
                        }}
                    />
                </Box>
                <Box m={2} className={'row'}>
                    <Typography variant={'h6'}>set value:</Typography>
                    <TextField
                        label="Number"
                        type="number"
                        size={'small'}
                        color={'primary'}
                        focused
                        InputLabelProps={{
                            // shrink: true,
                        }}
                    />
                </Box>
                <ButtonGroup color={'primary'} variant="contained" size="large" fullWidth>
                    <Button>set</Button>
                </ButtonGroup>
            </Paper>
            <Paper elevation={24} className={'block'}>
                <Box className={'counter'}>
                    <Typography color={(error) ? 'red' : 'black'} variant={'h1'}>{count}</Typography>
                </Box>
                <ButtonGroup color={'primary'} variant="contained" size="large" fullWidth>
                    <Button onClick={increaseValue} disabled={error}>increase</Button>
                    <Button onClick={resetValue} disabled={(count === 0)}>reset</Button>
                </ButtonGroup>
            </Paper>
        </Box>
    );
};

export default App