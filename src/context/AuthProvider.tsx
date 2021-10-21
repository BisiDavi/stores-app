import React, {PropsWithChildren} from 'react';

import useAuthReducer from '@/hooks/useAuthReducer';
import AuthContext from './AuthContext';

export default function AuthProvider({children}: PropsWithChildren<{}>) {
  const {state} = useAuthReducer();

  return (
    <AuthContext.Provider value={{state}}>{children}</AuthContext.Provider>
  );
}
