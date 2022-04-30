import {createContext, useContext, useState} from "react";
import {dialog} from "../utils/helpers";
import { v4 as uuidv4 } from 'uuid';
import {areas} from "../data";

const AppContext = createContext();

export const AppContextProvider = ({children}) => {

    const [value, setValue] = useState({
        users: localStorage.getItem('users') ? JSON.parse(localStorage.getItem('users')) : [
            {
                id: 10,
                name: 'Bank'
            },
        ],
        user_areas: localStorage.getItem('user_areas') ? JSON.parse(localStorage.getItem('user_areas')) : [],
        areas
    });

    const addUsers = (newUser) => {
        const users = [...value.users, {...newUser, id: uuidv4(), areas: []}];
        handleSetValue('users', users)
        localStorage.setItem('users', JSON.stringify(users))
    }

    const addUserArea = (newUser) => {
        const users = [...value.user_areas, newUser];
        handleSetValue('user_areas', users)
        localStorage.setItem('user_areas', JSON.stringify(users))
    }

    const setUserAreas = (user_areas) => {
        handleSetValue('user_areas', user_areas)
        localStorage.setItem('user_areas', JSON.stringify(user_areas))
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
                localStorage.clear();
            }
        })
    }

    const values = {
        ...value,
        handleSetValue,
        addUsers,
        setUsers,
        resetGame,
        setUserAreas,
        addUserArea
    }
    return <AppContext.Provider value={values}>{children}</AppContext.Provider>
}

export const useAppContext = () => useContext(AppContext)
