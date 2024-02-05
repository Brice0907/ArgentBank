import { configureStore } from "@reduxjs/toolkit";

// State de base
let initialState = {
    isLoggedIn: false,
    user: null,
    token: null,
    transaction: null,
};

// Gestion des changements d'état
const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'LOGIN':
            return {
                ...state,
                isLoggedIn: true,
                user: action.payload,
                token: action.payload.jwt,
                transaction: action.payload.transaction,
            };
        case 'PUT':
            return {
                ...state,
                user: {
                    ...state.user,
                    profil: {
                        ...state.user.profil,
                        firstName: action.payload.firstName,
                        lastName: action.payload.lastName,
                    },
                },
            };
        case 'LOGOUT':
            return {
                ...state,
                isLoggedIn: false,
                user: null,
                token: null,
                transaction: null,
            };
        default:
            return state;
    }
}

// Regroupe nos reducers (dans se cas nous avons qu'un reducer)
const rootReducer = {
    auth: authReducer,
}

// Configuration du store pour etre utilisé dans l'app
export const store = configureStore({
    reducer: rootReducer,
})