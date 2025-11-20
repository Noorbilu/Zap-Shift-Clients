import React, { use } from 'react';
import { AuthContext } from '../Context/AuthContext/AuthContext';
//import { AuthContext } from '../Contexts/AuthContext/AuthContext';

const useAuth = () => {
    const authInfo = use(AuthContext);
    return authInfo;
};

export default useAuth;