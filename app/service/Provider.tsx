import React, { useState } from 'react'
import AsyncStorage from '@react-native-community/async-storage';

type User = null | {username: string}
type IsNeurologista = null | boolean;

export const Context = React.createContext<{
  user: User,
  isNeurologista: IsNeurologista,
  loginNeurologista: () => void;
  loginCuidador: () => void;
  logout: () => void;

}>({
  user: null,
  isNeurologista: false,
  loginNeurologista: () => {},
  loginCuidador: () => {},
  logout: () => {}
});

interface ProviderProps {

}

export const Provider: React.FC<ProviderProps> = ({children}) => {
  const [user, setUser] = useState<User>(null);
  const [isNeurologista, setIsNeurologista] = useState<IsNeurologista>(null);

  return (
      <Context.Provider value={{
        user,
        isNeurologista,
        loginNeurologista:() => {
          const User = {username: 'monitor'};
          setUser(User);
          setIsNeurologista(true);
          AsyncStorage.setItem('user', JSON.stringify(User))
        },
        loginCuidador:() => {
          const User = {username: 'avaliador'};
          setUser(User);
          setIsNeurologista(false);
          AsyncStorage.setItem('user', JSON.stringify(User))
        },
        logout:() => {
          setUser(null);
          setIsNeurologista(null);
          AsyncStorage.removeItem('user');
        }
      }}>
        {children}
      </Context.Provider>
    );
}