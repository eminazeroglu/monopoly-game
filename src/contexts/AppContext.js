import {createContext, useContext, useState} from "react";

const AppContext = createContext();

export const AppContextProvider = ({children}) => {

    const [value, setValue] = useState({
        users: []
    });

    const setUsers = (newUser) => {
        handleSetValue('users', [...value.users, {...newUser, id: Math.random()}])
    }

    const handleSetValue = (key, newValue) => {
        setValue(prevState => ({
            ...prevState,
            [key]: newValue
        }))
    }

    const values = {
        ...value,
        handleSetValue,
        setUsers
    }
    return <AppContext.Provider value={values}>{children}</AppContext.Provider>
}

export const useAppContext = () => useContext(AppContext)
