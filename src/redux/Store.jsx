import { configureStore } from "@reduxjs/toolkit";
import CounterReducer from "./featches/counter/CounterSlice";


const store=configureStore({
    reducer:{
        //reducer
        Counter:CounterReducer

    }

})

export default store;