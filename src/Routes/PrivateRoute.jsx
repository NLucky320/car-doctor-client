import React, { useContext } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({children}) => {
    const { user, loading } = useContext(AuthContext);

    if (loading) {
    return <span className="loading loading-spinner text-secondary"></span>
}

    if (user?.email) {
        return children;
    }
    return <Navigate to='/login' state={ location?.pathname} replace></Navigate>
};

export default PrivateRoute;