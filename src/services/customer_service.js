import apiService from "./api_service";
const CustomerPath = "api/account";
export const getAllCustomer= async (param) => {
    try {
        const result = await apiService().getMethod(CustomerPath, param);
        return result;
    } catch (error) {
        throw error;
    }
}
export const getDetailCustomer= async (customerId) => {
    try {
        const result = await apiService().getMethod(`${CustomerPath}/${customerId}`)
        return result;
    } catch (error) {
        throw error;
    }
 
}

export const addCustomer= async (data) => {
    try {
        const result = await apiService(true).postMethod(`${CustomerPath}/manage`, data)
        return result;
    } catch (error) {
        throw error;
    }
    
}
export const updateCustomer= async (id,data) => {
    try {
        const result = await apiService(true).putMethod(`${CustomerPath}/${id}`,data)
        return result;
    } catch (error) {
        throw error;
    }

}
export const deleteCustomer= async (id) => {
    try {
        const result = await apiService(true).deleteMethod(`${CustomerPath}/manage?id=${id}`)
        return result;
    } catch (error) {
        throw error;
    }

}



// export const CustomerService = {
//     getAllCustomer,
//     getDetailCustomer,
//     addCustomer,
//     updateCustomer
// };