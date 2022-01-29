import { instance as axiosObj } from './axiosConfig';

const Urls = {
    userLogin: {
        endpoint: '/users',
        method: 'get'
    }
};

export const errorMessages = {
    INVALID_API_NAME: 'Invalid API endpoint',
    CLIENT_SIDE_EXCEPTION: 'Something went wrong. Please try again later.',
    SERVER_SIDE_EXCEPTION: 'API downstream exception'
};

const populateResponse = (success, data = null, message = '') => {
    const updatedResponse = {
        success
    };
    if (data) {
        updatedResponse['data'] = data;
    }
    if (message) {
        updatedResponse['message'] = message;
    }
    return updatedResponse;
};

export const callAPI = (apiName, data, headers = {}) => {
    return new Promise((resolve) => {
        if (Urls[apiName]) {
            try {
                const { endpoint, method } = Urls[apiName];
                if (headers && Object.keys(headers).length > 0) {
                    axiosObj.headers = {
                        ...axiosObj.headers,
                        ...headers
                    };
                }
                axiosObj[method](endpoint, data).then(
                    res => {
                        resolve(populateResponse(true, res.data));
                    },
                    err => {
                        resolve(populateResponse(false, err, errorMessages.SERVER_SIDE_EXCEPTION));
                    }
                );
            } catch(err) {
                resolve(populateResponse(false, err, errorMessages.CLIENT_SIDE_EXCEPTION));
            }
        } else {
            resolve(populateResponse(false, null, errorMessages.INVALID_API_NAME));
        }
    });
};
