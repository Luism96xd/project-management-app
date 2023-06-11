import { createContext, useState } from 'react';

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [accessToken, setAccessToken] = useState(null);
  const [username, setUsername] = useState(null);

  const contextValue = {
    accessToken,
    setAccessToken,
    username,
    setUsername,
  };

  return (
    <UserContext.Provider value={contextValue}>
        {children}
    </UserContext.Provider>
  );
};