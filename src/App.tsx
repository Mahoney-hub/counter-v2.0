import React, {useEffect, useState} from 'react';
import {Box, ThemeProvider} from '@mui/material';
import {SettingCounter} from './components/SettingCounter';
import {Counter} from './components/Counter';
import {theme} from './styles/styleMU';

const App = () => {
    // BLL
    const [count, setCount] = useState<number>(0)
    const [maxValue, setMaxValue] = useState<number>(0)
    const [startValue, setStartValue] = useState<number>(0)
    const [error, setError] = useState<boolean>(false)
    const [enteringText, setEnteringText] = useState<boolean>(false)
    useEffect(() => {
        let stringCounter = localStorage.getItem('counterValue')
        let stringMaxValue = localStorage.getItem('maxValue')
        let stringStartValue = localStorage.getItem('startValue')
        if (stringCounter) setCount(JSON.parse(stringCounter))
        if (stringMaxValue) setMaxValue(JSON.parse(stringMaxValue))
        if (stringStartValue) setStartValue(JSON.parse(stringStartValue))
    }, [])
    useEffect(() => {
        localStorage.setItem('counterValue', JSON.stringify(count))
        localStorage.setItem('maxValue', JSON.stringify(maxValue))
        localStorage.setItem('startValue', JSON.stringify(startValue))
    }, [count, maxValue, startValue])
    // Functions
    const getSettings = (maxValue: number, startValue: number) => {
        setMaxValue(maxValue)
        setCount(startValue)
        setStartValue(startValue)
    }
    // Components before rendering
    return (
        <ThemeProvider theme={theme}>
            <Box className={'container'}>
                <SettingCounter
                    error={error}
                    maxValue={maxValue}
                    startValue={startValue}
                    setMaxValue={setMaxValue}
                    setStartValue={setStartValue}
                    setError={setError}
                    getSettings={getSettings}
                    setEnteringText={setEnteringText}
                />
                <Counter
                    count={count}
                    maxValue={maxValue}
                    startValue={startValue}
                    error={error}
                    setCount={setCount}
                    enteringText={enteringText}
                />
            </Box>
        </ThemeProvider>
    );
};

export default App