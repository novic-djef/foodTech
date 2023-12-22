import axios from "axios";
import { authentificationAdminSignInt } from "./foodConstants";
import { fetchAuthKeySignInPending, fetchAuthKeySignInSuccess, fetchAuthKeySignInError } from "../../redux/action/AuthKeyActions";

export const getAuthApiKey = (data) => {
  return async (dispatch) => {
    try {
      dispatch(fetchAuthKeySignInPending());

      const response = await axios({
        url: authentificationAdminSignInt,
        method: 'POST',
        headers: {
          'Authorization': authKey,
          'X-Localization': currentLocale()
        },
        data
      });

      console.log('DEPOSIT ACTION', response);
      dispatch(fetchAuthKeySignInSuccess(response));
    } catch (error) {
      if (error.response) {
        dispatch(fetchAuthKeySignInError(error.response));
      } else if (error.request) {
        dispatch(fetchAuthKeySignInError(error.request));
      } else {
        dispatch(fetchAuthKeySignInError(error.message));
      }
    }
  };
};

// export const depositActionReset = () => {
//   return (dispatch) => {
//     dispatch(fetchDepositReset());
//   };
// };
