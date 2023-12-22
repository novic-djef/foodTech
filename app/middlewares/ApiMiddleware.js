/**
 * Project YooLearn
 * File Api
 * Path app/middleware
 * Created by MELATAGUIA TONLEU
 * Date: 03/08/2023
 */
import axios from 'axios';
import { API } from '../redux/reducer';
import {store} from "../redux/store";
//import I18n from "react-native-i18n";

const ApiMiddleware =
    ({dispatch}: any) =>
        next =>
            action => {
                next(action);

                if (action.type !== API) return;

                const {
                    url,
                    method,
                    data,
                    accessToken,
                    onLoading,
                    onSuccess,
                    timeout,
                    onError,
                    ...rest
                } = action.payload;
                const dataOrParams = ['GET', 'DELETE'].includes(method)
                    ? 'params'
                    : 'data';
                // axios default configs
                axios.defaults.headers.common['Content-Type'] = 'application/json';
                axios.defaults.headers.common['X-Localization'] = I18n.currentLocale();
                const auth = store.getState().authKeyReducer;
                const authKey = auth !== null ? `${auth.authKey.token_type} ${auth.authKey.access_token}` : '';
                if (accessToken)
                    axios.defaults.headers.common.Authorization = accessToken
                else
                    axios.defaults.headers.common.Authorization = `${authKey}`

                dispatch(onLoading());

                axios
                    .request({
                        url,
                        method,
                        timeout: timeout || 15000,
                        [dataOrParams]: data,
                        ...rest,
                    })
                    .then(response => {
                        console.log('Data response', response);
                        console.log('Data response data', response.config.data);
                        dispatch(onSuccess(response.data));
                    })
                    .catch(error => {
                        if (error.response) {
                            console.warn('Data error response', error.response);
                            dispatch(onError(error.response?.data));
                        } else if (error.request) {
                            console.warn('Data error request', error.request);
                            dispatch(onError(error.request));
                        } else {
                            console.warn('Data error message', error.message);
                            dispatch(onError(error.message));
                        }

                        /*            if (error.response && error.response.status === 403) {
                                                                                                                                                                                                                                                                                    dispatch(accessDenied());
                                                                                                                                                                                                                                                                                } */
                    });
            };

export default ApiMiddleware;
