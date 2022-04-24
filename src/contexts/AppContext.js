import {createContext, useContext, useState} from "react";
import {dialog} from "../utils/helpers";

const AppContext = createContext();

export const AppContextProvider = ({children}) => {

    const [value, setValue] = useState({
        users: localStorage.getItem('users') ? JSON.parse(localStorage.getItem('users')) : [
            {
                id: 10,
                name: 'Bank'
            },
        ]
    });

    const addUsers = (newUser) => {
        const users = [...value.users, {...newUser, id: Math.random()}];
        handleSetValue('users', users)
        localStorage.setItem('users', JSON.stringify(users))
    }

    const setUsers = (users) => {
        handleSetValue('users', users)
        localStorage.setItem('users', JSON.stringify(users))
    }

    const handleSetValue = (key, newValue) => {
        setValue(prevState => ({
            ...prevState,
            [key]: newValue
        }))
    }

    const resetGame = () => {
        dialog({
            message: 'Oyunu sonlandırmaq istədiyinizə əminsiz? Oyun sonladıqda bütün oyuncular silinəcək'
        })
        .then(r => {
            if (r === 'yes') {
                handleSetValue('users', [])
                localStorage.removeItem('users');
            }
        })
    }

    const values = {
        ...value,
        handleSetValue,
        addUsers,
        setUsers,
        resetGame
    }
    return <AppContext.Provider value={values}>{children}</AppContext.Provider>
}

export const useAppContext = () => useContext(AppContext)
