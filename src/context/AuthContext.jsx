import { createContext, useState } from "react";


export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    console.log("AuthProvider rendered");
    const [userDetails, setUserDetails] = useState(null);

    return (
        <AuthContext.Provider value={{ userDetails, setUserDetails }}>
            {children}
        </AuthContext.Provider>
    )
}