import { useState } from "react";
import { createContext } from "react";

export const MyContext = createContext(null);


export const AppContext = ({children}) => {

    const [store, setStore] = useState({
        isUserAuth: false,
        theme: 'light',
        user: {
            email: "",
            password: "",
            firstname: "",
            lastname: "",
            biography: "",
            postalCode: "",
            city: "",
            birthdate: "",
            avatar: "",
        }
    });

    return (

        <MyContext.Provider value={ { store, setStore } }>
            {children}
        </MyContext.Provider>
    );
};