import { toast } from 'react-toastify';
const tosatifyError = (message) => {
    if (message !== null && message !== '') {
        toast.error(message);
    }
};
const tosatifyWarring = (message) => {
    if (message !== null && message !== '') {
        toast.warning(message);
    }
};
const tosatifySuccess = (message) => {
    if (message !== null && message !== '') {
        toast.success(message);
    }
};
export { tosatifyError, tosatifySuccess, tosatifyWarring };
