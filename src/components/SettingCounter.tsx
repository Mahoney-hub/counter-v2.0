import React, {ChangeEvent, useEffect, useState} from 'react';
import {Box, Button, ButtonGroup, Paper, TextField, Typography} from '@mui/material';

type SettingCounterPropsType = {
    error: boolean
    maxValue: number
    startValue: number
    setMaxValue: (value: number) => void
    setStartValue: (value: number) => void
    setError: (error: boolean) => void
    getSettings: (maxValue: number, startValue: number) => void
    setEnteringText: (value: boolean) => void
}

export const SettingCounter = (props: SettingCounterPropsType) => {
    const {error, maxValue, startValue, setMaxValue, setStartValue, setError, getSettings, setEnteringText} = props
    // Functions
    const handlerMaxValue = (e: ChangeEvent<HTMLInputElement>) => {
        if (+(e.currentTarget.value) === startValue) {
            setError(true)
        } else {
            setMaxValue(+(e.currentTarget.value))
            setError(false)
            setEnteringText(true)
        }
    }
    const handlerStartValue = (e: ChangeEvent<HTMLInputElement>) => {
        if (+(e.currentTarget.value) === maxValue || +(e.currentTarget.value) === -1) {
            setError(true)
        } else {
            setStartValue(+(e.currentTarget.value))
            setError(false)
            setEnteringText(true)
        }
    }
    const handlerClick = () => {
        getSettings(maxValue, startValue)
        setEnteringText(false)
    }

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

