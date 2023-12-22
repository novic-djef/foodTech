import { LOGIN, LOGOUT, RETRIEVE_TOKEN } from "../types/loginType";


export const loginAction = (userName, userToken) => ({
    type: LOGIN,
    id: userName,
    token: userToken,
});

export const logoutAction = () => ({type: LOGOUT});

export const retrieveTokenAction = (userToken) => ({
    type: RETRIEVE_TOKEN,
    token: userToken,
})