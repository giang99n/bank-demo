import { Form } from "antd";
import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom"
import {getAllCustomer} from "../../../../../services/customer_service"
export const useListAccount=()=>{
    //const dispatch = useDispatch();
    const [formSearch] = Form.useForm();
 
    const [initParam, setInitParam] = useState({
        page: 0,
        size: 5,
        keyword: "",
    })
    const changePage = (value) => {
        setInitParam({ ...initParam, page: value-1 })
    }
    const [listData,setListData] = useState([]);
    const [total,setTotal] = useState(0);
    const onFinish = (values) => {
        console.log(values)
        setInitParam(
            {
                ...initParam,
                keyword: values?.keyword?.trim(),
                page: 0,
            })
    }
    const typingTimeoutRef = useRef(null);
    function handleInputOnchange(e) {
        const value = e.target.value;
        if (typingTimeoutRef.current) {
            clearTimeout(typingTimeoutRef.current);
        };

        typingTimeoutRef.current = setTimeout(() => {
            setInitParam(
                {
                    ...initParam,
                    keyword: value.trim(),
                    page: 0,
                })

        }, 800);
    }

    
    useEffect(() => {
        const getListAccount = async () => {
            const result = await getAllCustomer(initParam);
           // const listCustomers = result?.data?.listCustomers||[]
            const listCustomers = ( result?.data?.listCustomers||[]).map(item => (
                {
                    ...item,
                    key: item?.id || null,
                })
            );
            setListData(listCustomers)
            setTotal(result?.data?.totalItems)
         
        };
        getListAccount();
    }, [initParam]);

    return {
        listData,
        total,
        //  initFormSearch,
        onFinish,
        //onClearForm,     
        initParam,
        changePage,
        handleInputOnchange
    }

}