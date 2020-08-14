import axios from 'axios';
import qs from 'qs';
const axiosCustomer = () => {
    // create axios customer
    const instance = axios.create({
        headers: {
            'X-Requested-With': 'XMLHttpRequest',
            //'Content-type': 'application/x-www-form-urlencoded',
            //'Access-Control-Allow-Origin': '*',
            'Authorization': localStorage.getItem('token') ? localStorage.getItem('token') : '',
        },
        baseURL: 'http://localhost:8000',
        timeout: 1000,
    });
    // xu ly khi api thanh cong
    const handleSuccess = (respone) => {
        return respone;
    };

    // xu ly khi bi loi
    const handleError = (error) => {
        return Promise.reject(error);
    };

    // setup cac phuong thuc cho axios customer
    axios.interceptors.request.use(handleSuccess, handleError);

    return {
        callApi: async (method, url, data, params) => {
            console.log(method, data);
            try {
                const result = await instance({
                    method,
                    url,
                    data: qs.stringify(data) || null,
                    params: qs.stringify(params) || null,
                });
                return result;
            } catch (error) {
                //hander error
                throw error;
            }
        },
    };
};
export default axiosCustomer();
