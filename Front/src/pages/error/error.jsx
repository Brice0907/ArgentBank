import { Link } from "react-router-dom"
import Footer from "../../components/footer/footer.jsx"
import Logo from './asset/argentBankLogo.png';
import './style/error.css'

export default function Error() {
    return <>
        <header className="main-nav">
            <Link className="main-nav-logo" to="/">
                <img className="main-nav-logo-image" src={Logo} alt="Argent Bank Logo" />
            </Link>
            <div>
                <Link className="main-nav-item" to="/login">
                    <i className="fa fa-user-circle main-nav-item-utilisateur"></i>
                    Sign In
                </Link>

            </div>
        </header>
        <div className="main bg-dark">
            <p className="error-404">404</p>
            <p className="error-text">Oups ! Une erreur est survenue veuillez cliquer sur le lien ci dessous !</p>
            <Link to='/' className="error-text">Retourner sur la page d&apos;Accueil</Link>
        </div>
        <Footer />
    </>
}