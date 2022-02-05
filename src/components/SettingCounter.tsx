import React, {ChangeEvent, useState} from 'react';
import {Box, Button, ButtonGroup, Paper, TextField, Typography} from '@mui/material';

type SettingCounterPropsType = {
    getSettings: (maxValue: number, startValue: number) => void
}

export const SettingCounter = ({getSettings}: SettingCounterPropsType) => {
    const [maxValue,setMaxValue] = useState<number>(0)
    const [startValue,setStartValue] = useState<number>(0)
    // Functions
    const handlerMaxValue = (e: ChangeEvent<HTMLInputElement>) => setMaxValue(+(e.currentTarget.value))
    const handlerStartValue = (e: ChangeEvent<HTMLInputElement>) => setStartValue(+(e.currentTarget.value))
    const handlerClick = () => getSettings(maxValue,startValue)

    return (
        <Paper elevation={24} className={'block'}>
            {/*{componentFieldNames}*/}
            <Box m={2} className={'row'}>
                <Typography variant={'h6'}>max value:</Typography>
                <TextField
                    label="Number"
                    type="number"
                    size={'small'}
                    color={'primary'}
                    focused
                    value={maxValue}
                    onChange={handlerMaxValue}
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
                    value={startValue}
                    onChange={handlerStartValue}
                />
            </Box>
            <ButtonGroup color={'primary'} variant="contained" size="large" fullWidth>
                <Button onClick={handlerClick}>set</Button>
            </ButtonGroup>
        </Paper>
    );
};

