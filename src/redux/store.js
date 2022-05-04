import { configureStore } from '@reduxjs/toolkit'
import authen from '../pages/admin/authentication/auth.slice'
import layoutPage from './layout_slice'
//import { customer} from '../pages/admin/home/Customer/slice/Customer.reducer'


export const store = configureStore({
    reducer: {
        authen,
        layoutPage,
       // customer,
    }
})