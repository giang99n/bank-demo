import { Form } from "antd";
import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useHistory } from "react-router-dom"
import {addCustomer,updateCustomer,getDetailCustomer} from "../../../../../services/customer_service"

const initForm = {
    email: null,
    balance:null,
    firstName:null,
    lastName:null,
    age:null,
    gender:null,
    address:null,
    employer:null,
    city:null,
    state:null,
    roleList:null
   
};

export const useFormCustomer=()=>{
    //const dispatch = useDispatch();
    const location = useLocation();
    const id= location?.state?.id||null;
    const [form] = Form.useForm();
    const [isLoading, setIsLoading] = useState(false);
    const [result, setResult] = useState({});
    useEffect(() => {
        const getDetailEvent = async(customerId) => {
            setIsLoading(true);
            const result = await getDetailCustomer(customerId);
            console.log(result.data)
            form.setFieldsValue({
                email: result?.data?.email,
                balance: result?.data?.balance,
                firstName: result?.data?.firstName,
                lastName: result?.data?.lastName,
                age: result?.data?.age,
                gender: result?.data?.gender,
                address: result?.data?.address,
                employer: result?.data?.employer,
                city: result?.data?.city,
                state: result?.data?.state,
                roleList: result?.data?.roleList[0]?.name
            });
            setIsLoading(false);
            //setAllowEdit(result.data.allowEdit)
        };
        if (id) {
            getDetailEvent(id);
        }
    }, [id]);

    const onFinish = (values) => {
        console.log(values)
        const final={
            ...values,
            roleList:[
                {
                    "description": values?.roleList || "user",
                    "id": 1,
                    "name": values?.roleList ||"user"
                  }
            ]
        }
        const onSubmitForm= async () => {
            if (id) {
                console.log(id)
                const result = await updateCustomer(id, final);
                console.log(result)
               
            } else {
                const result = await addCustomer(final);
                console.log(result)
            }

        }

        onSubmitForm();

 
    }
  
    


    return {
        initForm,
        result,
        onFinish,
        form
          

    }

}