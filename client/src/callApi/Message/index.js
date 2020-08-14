import axiosCustom from '../../utils/axios';

const getMessages = async (roomId) => {
    try {
        const result = await axiosCustom.callApi('get', `api/v1/getmessage/${roomId}`);
        if (result) {
            return result;
        }
    } catch (error) {
        throw error;
    }
};
export { getMessages };
