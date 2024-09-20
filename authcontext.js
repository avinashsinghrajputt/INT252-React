import React , {createContext, useState, useContext, Children} from 'react';
//create a context woth default values
const AuthContext =createContext({
    isAuthenticated :false,
    login:()=>{},
    logout:()=>{},
});
//create a provider
const AuthProvider=({ child})=>{
    //state to track whearter user is authencates or not
    const[isAuthenticated, setisAuthenticated]= useState(null)
    const login=()=>{
        console.log("login in ...")
        setisAuthenticated(true)
        console.log('user is authnenticated', true)
    };
    const logout=()=>{
        console.log("logging out..")
        setisAuthenticated(false)
        console.log("user is authenticated", false)
    }
}
return(
    <AuthContext.Provider value={{isAuthenticated, login ,logout}}>
        {child}
    </AuthContext.Provider>
)