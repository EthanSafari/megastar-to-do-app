import { createContext, useState } from 'react';

export const TodoContext = createContext();

export const TodoProvider = (props) => {
    const [open, setOpen] = useState(true);
    const todoContextValue = {
        open, setOpen
    };
    return (
        <TodoContext.Provider value={todoContextValue}>
            {props.children}
        </TodoContext.Provider>
    );
};
