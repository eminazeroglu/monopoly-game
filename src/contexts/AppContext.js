import Swal from "sweetalert2";
import {createContext, useContext, useState} from "react";
import {dialog} from "../utils/helpers";

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

    const resetGame = () => {
        dialog({
            message: 'Oyunu sonlandırmaq istədiyinizə əminsiz? Oyun sonladıqda bütün oyuncular silinəcək'
        })
        .then(r => {
            if (r === 'yes') {
                handleSetValue('users', [])
            }
        })
    }

    const values = {
        ...value,
        handleSetValue,
        setUsers,
        resetGame
    }
    return <AppContext.Provider value={values}>{children}</AppContext.Provider>
}

export const useAppContext = () => useContext(AppContext)
