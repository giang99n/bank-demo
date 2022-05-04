//const HOST = process.env.REACT_APP_API_ENDPOINT;
const HOST = 'http://192.168.0.69:8085';
//const HOST = 'https://huntsub.com'
const UPLOAD = `${HOST}/upload`


// ADMIN
const ADMIN = '/admin';
const AUTHEN = '/authen';
const LOGIN_AUTHEN = `${AUTHEN}/login`;
const SIGNUP_AUTHEN = `${AUTHEN}/signup`;
const DASHBOARD_ADMIN = `${ADMIN}/dashboard`;
const CUSTOMER_ADMIN = `${ADMIN}/customer`;
const CUSTOMER_ADMIN_LIST = `${CUSTOMER_ADMIN}/list-customer`;
const CUSTOMER_ADMIN_FORM = `${CUSTOMER_ADMIN}/customer-form`;
const CUSTOMER_ADMIN_FORM_DETAIL_UPDATE = `${CUSTOMER_ADMIN}/customer-form`;



//HOME


export const listRoute = {
    HOST,
    UPLOAD,
    ADMIN,
    AUTHEN,
    LOGIN_AUTHEN,
    SIGNUP_AUTHEN,
    DASHBOARD_ADMIN,
    CUSTOMER_ADMIN,
    CUSTOMER_ADMIN_LIST,
    CUSTOMER_ADMIN_FORM,
    CUSTOMER_ADMIN_FORM_DETAIL_UPDATE

}