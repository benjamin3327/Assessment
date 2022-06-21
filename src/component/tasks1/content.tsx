import * as React from 'react';
import { useState } from 'react';
import LogComponents from './hook/log';

const Content = () => {

    const [number, setNumber] = useState (" ")
    LogComponents (number)
 
    return (
        <div>
            <input type="number" value={number} onChange={(e) => setNumber (e.target.value)} />
        </div>
    )
}

export default Content