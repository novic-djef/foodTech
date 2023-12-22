import axios from "axios";
import I18n from 'react-native-i18n';
import {store} from "../redux/store";
import {envoieCommissionUrl, envoieUserWalletToWallet} from "./IlinkConstants";
import {

    fetchEnvoieUserWalletToWalleGetCommissiontPending,
    fetchEnvoieUserWalletToWalleGetCommissiontReset,
    fetchEnvoieUserWalletToWalletError,
    fetchEnvoieUserWalletToWalletGetCommissionError,
    fetchEnvoieUserWalletToWalletGetCommissionSuccess,
    fetchEnvoieUserWalletToWalletPending,
    fetchEnvoieUserWalletToWalletReset,
    fetchEnvoieUserWalletToWalletSuccess
} from "../redux/actions/EnvoieUserType";


export const envoieUserWalletToWalletAction = (data) => {

    const auth = store.getState().authKeyReducer;
    const authKey = auth !== null ? `${auth.authKey.token_type} ${auth.authKey.access_token}` : '';

    return dispatch => {
        dispatch(fetchEnvoieUserWalletToWalletPending());

        axios({
            url: `${envoieUserWalletToWallet}`,
            method: 'POST',
            data,
            headers: {
                'Authorization': authKey,
                'X-Localization': I18n.currentLocale()
            }
        })
            .then(response => {
                console.log(response);
                dispatch(fetchEnvoieUserWalletToWalletSuccess(response));
            })
            .catch(error => {
                if (error.response)
                    dispatch(fetchEnvoieUserWalletToWalletError(error.response));
                else if (error.request)
                    dispatch(fetchEnvoieUserWalletToWalletError(error.request))
                else
                    dispatch(fetchEnvoieUserWalletToWalletError(error.message))
            });
    }
}

export const envoieUserWalletToWalletReset = () => {
    return dispatch => {
        dispatch(fetchEnvoieUserWalletToWalletReset());
    }
}

export const getCommissionUserWalletToWalletAction = (data) => {

    const auth = store.getState().authKeyReducer;
    const authKey = auth !== null ? `${auth.authKey.token_type} ${auth.authKey.access_token}` : '';

    return dispatch => {
        dispatch(fetchEnvoieUserWalletToWalleGetCommissiontPending());

        axios({
            url: `${envoieCommissionUrl}`,
            method: 'POST',
            data,
            headers: {
                'Authorization': authKey,
                'X-Localization': I18n.currentLocale()
            }
        })
            .then(response => {
                console.log(response);
                dispatch(fetchEnvoieUserWalletToWalletGetCommissionSuccess(response));
            })
            .catch(error => {
                if (error.response)
                    dispatch(fetchEnvoieUserWalletToWalletGetCommissionError(error.response));
                else if (error.request)
                    dispatch(fetchEnvoieUserWalletToWalletGetCommissionError(error.request))
                else
                    dispatch(fetchEnvoieUserWalletToWalletGetCommissionError(error.message))
            });
    }
}

export const getCommissionUserWalletToWalletReset = () => {
    return dispatch => {
        dispatch(fetchEnvoieUserWalletToWalleGetCommissiontReset());
    }
}

