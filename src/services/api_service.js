import axiosConfig from "./axios_config";



export default function apiService(requireToken = false) {
    const getMethod = (path, param) => {
        const paramString = new URLSearchParams(param);
        const url = `${path}?${paramString}`;
        try {
            const serverResponse = axiosConfig(false).get(url);
            return serverResponse;
        }
        catch (e) {
            console.log(e);
        }
    }

    const postMethod = (path, body) => {
        try {
            const serverResponse = axiosConfig(requireToken).post(path, body);
            return serverResponse;
        }
        catch (e) {
            console.log(e)
        }
    }

    const putMethod = (path, body) => {
        try {
            const serverResponse = axiosConfig(true).put(path, body);
            return serverResponse;
        }
        catch (e) {
            console.log(e)
        }
    }

    const deleteMethod = (path, body) => {
        try {
            const serverResponse = axiosConfig(true).delete(path, body);
            return serverResponse;
        }
        catch (e) {

        }
    }

    return { getMethod, postMethod, putMethod, deleteMethod }
}