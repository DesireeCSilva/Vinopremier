import {useContext, createContext, useState } from "react";


export const UserContext = createContext ();

export const UserProvider = ({children}) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [isUserRole, setIsUserRole] = useState(null);

    return (
        <UserContext.Provider value={{setIsAuthenticated, isAuthenticated, setIsUserRole, isUserRole}}>
            {children}
        </UserContext.Provider>
    );
};

export default UserProvider;
export const useUserContext = () => useContext(UserContext)