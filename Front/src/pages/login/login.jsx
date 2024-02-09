import './style/login.css';
import { useState } from 'react';
import { userLogin } from "../../service/connexion.js";
import { userProfile } from '../../service/profile.js';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import data from '../../data/transaction.json';


export default function Login() {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const [error, setError] = useState(false);

    async function sending(e) {
        e.preventDefault()

        try {
            const token = await userLogin(username, password)
            if (token === '400') {
                setError(true)
            }
            if (token === 'REFUSED') {
                navigate('/error')
            }
            const profil = await userProfile(token)

            if (typeof profil === 'object' && profil !== null) {
                setError(false)
                const content = data.find(data => data.email === profil.email)
                dispatch({ type: 'LOGIN', payload: { profil, token, content } });
                navigate('/profil');
            }
        } catch (error) {
            console.log(error);
            navigate('/error');
        }
    }

    return <div className='main bg-dark'>
        <div className="sign-in-content">
            <i className="fa fa-user-circle sign-in-icon"></i>
            <h1>Sign In</h1>
            <form>
                <div className="input-wrapper">
                    <label htmlFor="username">Username</label>
                    <input type="text" id="username" value={username} onChange={(e) => setUsername(e.target.value)} />
                </div>
                <div className="input-wrapper">
                    <label htmlFor="password">Password</label>
                    <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                </div>
                {error === true ? (
                    <div className='error-message'>Email ou mot de passe incorrect</div>
                ) : null}
                <div className="input-remember">
                    <input type="checkbox" id="remember-me" /><label htmlFor="remember-me">Remember me</label>
                </div>
                <button onClick={sending} className="sign-in-button">Sign In</button>
            </form>
        </div>
    </div>
}