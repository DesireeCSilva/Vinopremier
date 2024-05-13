import {useContext, createContext, useState } from "react";


export const UserContext = createContext ();

export const UserProvider = ({children}) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    return (
        <UserContext.Provider value={{setIsAuthenticated}}>
            {children}
        </UserContext.Provider>
    );
};

export default UserProvider;
export const useUserContext = () => useContext(UserContext)