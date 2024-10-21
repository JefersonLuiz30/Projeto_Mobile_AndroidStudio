const { createContext, useState, useEffect } = require("react");

import { loginUsuario, logoutUsuario, registarUsuario } from "../services/auth-firebase";

const AuthContext = createContext({});

export const AuthProvider = ({children}) => {
   
    const [ user , setUser ] = useState(null);

    const LoginUser = async (email, password) => {
        try {
          const userCredential = await loginUsuario(email, password);        
          setUser( {
             email: userCredential?.user?.email,
             token : userCredential?.accessToken ,
             uuid: userCredential?.user?.uid } 
            );          

          return user ;          
        } catch (error) {
          console.error('Erro ao fazer login: ', error.message);
        }
      };
    
      const LogoutUser = async () => {
        try {
         // console.log("auth-saindo: ", user);
          setUser(null);
          await logoutUsuario(user);
          // 
        } catch (error) {
          console.error('Erro ao fazer logout: ', error.message);
        }
      };

      const createUser = async (email, password) => {
        try {
          const userCredential = await registarUsuario(email, password);
          // console.log( "auth : " , userCredential)
          setUser( {
            email: userCredential?.user?.email,
            token : userCredential?.accessToken,
            uuid: userCredential?.user?.uid } 
           );        
         return userCredential ;  

        } catch (error) {
          console.error('Erro ao fazer logout: ', error.message);
        }
      }

    return(
        <AuthContext.Provider value={ {signed: !!user, user , setUser , LoginUser , LogoutUser,createUser }} >
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContext;