import Profile from './pages/profile/profile.jsx';
import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';


const ProtectedProfil = () => {
    const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
    return isLoggedIn ? (
        <Profile />
    ) : (
        <Navigate to="/login" replace />
    );
};

export { ProtectedProfil };
