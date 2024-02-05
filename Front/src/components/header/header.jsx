import './style/header.css'
import Logo from './asset/argentBankLogo.png';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

export default function Header() {

    const dispatch = useDispatch();
    const user = useSelector((state) => state.auth.user);

    function logout() {
        dispatch({ type: 'LOGOUT', payload: null })
    }

    return <header className="main-nav">
        <Link className="main-nav-logo" to="/">
            <img className="main-nav-logo-image" src={Logo} alt="Argent Bank Logo" />
        </Link>
        <div>
            {user === null ?
                (<Link className="main-nav-item" to="/login">
                    <i className="fa fa-user-circle main-nav-item-utilisateur"></i>
                    Sign In
                </Link>)
                : (<div>
                    <Link className="main-nav-item" href="/profil">
                        <i className="fa fa-user-circle"></i>
                        {user.profil.firstName}
                    </Link>
                    <Link className="main-nav-item" onClick={logout} to="/">
                        <i className="fa fa-sign-out"></i>
                        Sign Out
                    </Link>
                </div>)}

        </div>
    </header>
}