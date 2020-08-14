import axiosCustom from '../../utils/axios';
const login = async (payload) => {
    try {
        const result = await axiosCustom.callApi('post', '/api/v1/user/signin', payload);
        if (result) {
            return result;
        }
    } catch (error) {
        throw error;
    }
};
const signUp = async (payload) => {
    try {
        const result = await axiosCustom.callApi('post', '/api/v1/user/signup', payload);
        if (result) {
            return result;
        }
    } catch (error) {
        throw error;
    }
};
const getAllUser = async () => {
    try {
        const result = await axiosCustom.callApi('get', '/api/v1/user/getAllUser');
        if (result) {
            return result;
        }
    } catch (error) {
        throw error;
    }
};
export { login, signUp, getAllUser };
