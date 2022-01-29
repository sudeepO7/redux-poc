import { callAPI } from '../Helpers/apiService';

export const userLogin = (userCred) => {
    const { username, password } = userCred;
    return callAPI('userLogin', {
        params: {
            uname: username,
            psw: password
        }
    });
};
