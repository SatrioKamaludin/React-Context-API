import React, { useContext } from 'react'
import { DataContext } from '../context/DataContext'
import { del } from '../actions/listAction'

const Todos = () => {
    const { lists, dispatch } = useContext(DataContext)
    const remove = id => {
        dispatch(del(id))
    }
    return (
        <ul>
            {lists.map(item =>
                <li key={item.id}>
                    {item.title}
                    <button onClick={() => remove(item.id)}>x</button>
                </li>
            )}
        </ul>
    )
}
export default Todos