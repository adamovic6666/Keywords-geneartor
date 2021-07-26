import React, { useState } from 'react';

export const Context = React.createContext();

export default function GoogleAddsContext (props) {

    let [count, updateCountHandler ] = useState(0);

    const updateCount = val => {
        console.log(val)
    }

    const contextValues = {
        count : count,
        changeCountHandler: updateCount,
        changeOnFirstPage: updateCountHandler
    }

    return <Context.Provider value={contextValues}>
        {props.children}
    </Context.Provider>
};