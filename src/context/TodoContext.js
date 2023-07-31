import { createContext, useState } from 'react';

export const TodoContext = createContext();

export const TodoProvider = (props) => {
    const [open, setOpen] = useState(1);
    const [search, setSearch] = useState('');
    const [openModal, setOpenModal] = useState(false);
    const todoContextValue = {
        open, setOpen,
        search, setSearch,
        openModal, setOpenModal
    };
    return (
        <TodoContext.Provider value={todoContextValue}>
            {props.children}
        </TodoContext.Provider>
    );
};
