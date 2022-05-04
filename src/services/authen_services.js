import apiService from "./api_service";

const login = async (data) => {

    const result = await apiService().postMethod("/api/login", data)
    console.log(result)
    return result;
}


export const authenServcie = { login };
