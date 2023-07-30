import { createContext, useState } from 'react';

export const TodoContext = createContext();

export const TodoProvider = (props) => {
    const [open, setOpen] = useState(1);
    const [search, setSearch] = useState('');
    const todoContextValue = {
        open, setOpen,
        search, setSearch,
    };
    return (
        <TodoContext.Provider value={todoContextValue}>
            {props.children}
        </TodoContext.Provider>
    );
};
