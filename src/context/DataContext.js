import React, { createContext } from 'react'
import { useState } from 'react'

export const DataContext = createContext()

const initialState = [
    {
        id: 1,
        title: "this is title one"
    }
]

export const DataProvider = (props) => {
    const [lists, setLists] = useState(initialState);

    return (
        <DataContext.Provider value={{ lists }}>
            {props.children}
        </DataContext.Provider>
    )
}