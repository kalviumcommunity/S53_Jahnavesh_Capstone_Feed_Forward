import { onAuthStateChanged } from 'firebase/auth';
import React, { useEffect, useState, createContext } from 'react';
import { auth } from '../firebase';

export const AppContext = createContext();

const ParentContext = ({ children }) => {
  const [user, setUser] = useState({});
  const [signin, setSignin] = useState(false);
  const [signup, setSignup] = useState(false);

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (user) => {    
      setUser(user);
      if (user) {
        setSignin(true);
      }
      console.log('userdata:', user);
    });

    return () => {
      unsub();
    };
  }, []);

  return (
    <AppContext.Provider value={{ user, signin, setUser, setSignin, setSignup, signup }}>
      {children}
    </AppContext.Provider>
  );
};

export default ParentContext;
