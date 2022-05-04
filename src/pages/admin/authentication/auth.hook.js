import { message } from "antd";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginAction } from "./auth.slice";
import { useHistory } from 'react-router-dom'
import { localSpace } from "../../../services/local/local_space";
import { keyLocal } from "../../../constants/key_local";
import { listRoute } from "../../../constants/list_route";

const useAuth = () => {
    const history = useHistory();
    const authen = useSelector(state => state.authen);
    const dispatch = useDispatch();

    const onFinish = (values) => {
        const { email, password } = values;
        const data = {
            email: email,
            password
        }

        dispatch(loginAction(data))
    };

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    useEffect(() => {
        const { isSuccess, information } = authen;
        console.log(authen)
        if (authen?.isSuccess !== null) {
            if (!isSuccess){
                message.error('Fail');
            }else{
                history.push(listRoute.CUSTOMER_ADMIN)
            }

        }
    }, [authen.isSuccess])

    return { onFinish, onFinishFailed, authen }
}

export default useAuth;