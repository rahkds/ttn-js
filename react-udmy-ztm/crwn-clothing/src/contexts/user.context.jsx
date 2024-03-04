// import {createContext, useEffect, useState, useReducer} from "react";
// import { createUserDocumentFromAuth, onAuthStateChangedListener } from "../utils/firebase/firebase.utils";

// export const UserContext = createContext({
//     currentUser : null,
//     setCurrentUser : () => null
// });

// export const USER_ACTION_TYPES = {
//     SET_CURRENT_USER : 'SET_CURRENT_USER'
// }

// const userReducer = (state, action) => {
//     console.log("dispatched");
//     console.log(action);
//     const {type, payload} = action;
//     switch(type) {
//         case 'SET_CURRENT_USER' : 
//             return {
//                 ...state,
//                 currentUser : payload
//             }

//         default:
//             throw new Error(`Unhandled type ${type} in userReducer`);
//     }
// }

// const INTITAL_STATE = {
//     currentUser : null
// }

// export const UserProvider = ({children}) => {

//     const [state, dispatch] = useReducer(userReducer, INTITAL_STATE);
//     const {currentUser} = state;

//     const setCurrentUser = (user) => {
//         dispatch({type : USER_ACTION_TYPES.SET_CURRENT_USER, payload : user});
//     }
//     const value = {currentUser, setCurrentUser};

//     useEffect(() => {
//         const unsubscribe = onAuthStateChangedListener((user) => {
//             if(user) {
//                 createUserDocumentFromAuth(user);
//             }
//             setCurrentUser(user);
//             console.log("user ===", user);
//         });
//         return unsubscribe;
//     }, [])


//     return <UserContext.Provider value={value}>{children}</UserContext.Provider>
// }