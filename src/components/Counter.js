import React, { Fragment, useState } from 'react'
import { Button } from 'reactstrap'

const Counter = () => {
    const [count, setCount] = useState(0)
    const toggleInc = () => {
        setCount(count + 1)
    }
    const toggleDec = () => {
        setCount(count - 1)  
    }

    //========== main_return_function =============//
    return (
        <Fragment>
            <Button onClick={toggleInc}>Increment</Button>
            <h2>{count}</h2>
            <Button onClick={toggleDec}>Decrment</Button>
        </Fragment>
    )
}

export default Counter
