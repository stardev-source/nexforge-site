import { useState, useEffect } from 'react';
import { getState, subscribe, setState } from '../data/store';
export function useStore() {
    const [, setTick] = useState(0);
    useEffect(() => {
        return subscribe(() => setTick(t => t + 1));
    }, []);
    return [getState(), setState];
}
