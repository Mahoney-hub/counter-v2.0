import React, {useState} from 'react';
import {Box} from '@mui/material';
import {SettingCounter} from './components/SettingCounter';
import {Counter} from './components/Counter';

const App = () => {
    // BLL
    const [count, setCount] = useState<number>(0)
    const [maxValue, setMaxValue] = useState<number>(0)
    const [startValue, setStartValue] = useState<number>(0)
    const [error, setError] = useState<boolean>(false)
    // Functions
    const increaseValue = () => {
        if (!error) setCount(count + 1)
    }
    const resetValue = () => {
        if (count !== startValue) setCount(startValue)
    }
    const getSettings = (maxValue:number, startValue:number) => {
        setMaxValue(maxValue)
        setCount(startValue)
        setStartValue(startValue)
    }
    // Components before rendering
    return (
        <Box className={'container'}>
            <SettingCounter getSettings={getSettings}/>
            <Counter
                count={count}
                error={error}
                increaseValue={increaseValue}
                resetValue={resetValue}
            />
        </Box>
    );
};

export default App