// import React, { useEffect, useState } from "react";
// import { auth } from "./firebase";
// import {
//     signInWithEmailAndPassword,
//     createUserWithEmailAndPassword,
//     signOut,
//
// } from "firebase/auth";
//
// export const AuthContext = React.createContext();
//
// export const AuthProvider = ({ children }) => {
//     const [currentUser, setCurrentUser] = useState(null);
//
//     const login = (email, password) => {
//         console.log(email);
//         signInWithEmailAndPassword(auth, email, password)
//             .then((res) => {
//                 console.log("logged in.")
//                 setCurrentUser(res.user.email);
//             })
//             .catch(err => console.log(err));
//     }
//
//     const logout = () => {
//         signOut(auth).then(() => {
//             console.log("User logged out");
//             setCurrentUser("Logged out");
//         })
//             .catch(err => console.log(err));
//     }
//
//     const register = (email, password) => {
//         createUserWithEmailAndPassword(auth, email, password)
//             .then(() => {
//                 signInWithEmailAndPassword(auth, email, password)
//                     .then((res) => {
//                         console.log("logged in.")
//                         setCurrentUser(res.user.email);
//                     })
//                     .catch(err => console.log(err));
//             })
//             .catch(err => console.log(err));
//     }
//
//     return (
//         <AuthContext.Provider value={{ currentUser, login, logout, register }}>
//             {children}
//         </AuthContext.Provider>
//     );
// };
