import { Outlet } from "react-router-dom";
import Footer from "../components/footer/footer.jsx";
import Header from "../components/header/header.jsx";
import { Provider } from 'react-redux'
import { store } from '../app/store.js';


export default function Root() {
    return (
        <Provider store={store}>
            <>
                <Header />
                <Outlet />
                <Footer />
            </>
        </Provider>
    )
}