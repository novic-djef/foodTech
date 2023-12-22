import { AUTH_KEY_SIGN_UP_PENDING, AUTH_KEY_SIGN_UP_SUCCESS, AUTH_KEY_SIGN_UP_ERROR, AUTH_KEY_SIGN_OUT_PENDING, AUTH_KEY_SIGN_OUT_SUCCESS, AUTH_KEY_SIGN_OUT_ERROR, AUTH_KEY_SIGN_IN_PENDING, AUTH_KEY_SIGN_IN_SUCCESS, AUTH_KEY_SIGN_IN_ERROR } from "../types/AuthKeyType";


export const fetchAuthKeySignInPending = () => ({
     type: AUTH_KEY_SIGN_IN_PENDING
});

export const fetchAuthKeySignInSuccess = (res) => ({
     type: AUTH_KEY_SIGN_IN_SUCCESS,
     result: res,
});

export const fetchAuthKeySignInError = (error) => ({
     type: AUTH_KEY_SIGN_IN_ERROR,
     result: error
});  

// pour signUp

export const fetchAuthKeySignUpPending = () => ({
     type: AUTH_KEY_SIGN_UP_PENDING
});

export const fetchAuthKeySignUpSuccess = (res) => ({
     type: AUTH_KEY_SIGN_UP_SUCCESS,
     result: res,
});

export const fetchAuthKeySignUpError = (error) => ({
     type: AUTH_KEY_SIGN_UP_ERROR,
     result: error
}); 

// pour signOut

export const fetchAuthKeySignOutPending = () => ({
     type: AUTH_KEY_SIGN_OUT_PENDING
});

export const fetchAuthKeySignOutSuccess = (res) => ({
     type: AUTH_KEY_SIGN_OUT_SUCCESS,
     result: res,
});

export const fetchAuthKeySignOutError = (error) => ({
     type: AUTH_KEY_SIGN_OUT_ERROR,
     result: error
}); 
export const signIn = (credentials) => async (dispatch) => {
     try {
       // Faites la requête axios pour la connexion ici
       const response = await axios.post('http://localhost:3001/administrator/login', credentials);
   
       dispatch({ type: AUTH_KEY_SIGN_IN_SUCCESS, payload: response.data.user }); // Mettez à jour l'état avec l'utilisateur connecté
     } catch (error) {
       // Gérez les erreurs ici
     }
   };

   export const signUp = (userData) => async (dispatch) => {
     try {
       // Faites la requête axios pour l'inscription ici
       const response = await axios.post('http://localhost:3001/administrator/signIn', userData);
   
       dispatch({ type: AUTH_KEY_SIGN_UP_SUCCESS, payload: response.data.user }); // Mettez à jour l'état avec l'utilisateur inscrit
     } catch (error) {
       // Gérez les erreurs ici
     }
   };

   export const signOut = () => ({ type: AUTH_KEY_SIGN_OUT_SUCCESS })