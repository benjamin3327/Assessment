import * as React from 'react';

import { useEffect } from 'react';


const LogComponents = (props:any) => {
    useEffect(() => {
         console.log(props)
    }, [props])
}

export default LogComponents ;