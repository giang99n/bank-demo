import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const useInit = () => {
    const authen = useSelector(state => state.authen);
    return { authen }
}

export default useInit;