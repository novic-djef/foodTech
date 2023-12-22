import { LOGIN } from "../types/authType";

export const Login = (username, password) => {
    const token = username+password;
    return({
        type: LOGIN,
        payload: token,
    })
}