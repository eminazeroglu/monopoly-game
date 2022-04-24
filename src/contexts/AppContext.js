import {createContext, useContext, useState} from "react";

const AppContext = createContext();

export const AppContextProvider = ({children}) => {

    const [value, setValue] = useState({
        users: []
    });

    const handleSetValue = (key, newValue) => {
        setValue(prevState => ({
            ...prevState,
            [key]: newValue
        }))
    }

    const values = {
        ...value,
        handleSetValue,
    }
    return <AppContext.Provider value={values}>{children}</AppContext.Provider>
}

export const useAppContext = () => useContext(AppContext)
