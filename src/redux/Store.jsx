import { configureStore } from "@reduxjs/toolkit";
import CounterReducer from "./featches/counter/CounterSlice";
import logger from "./Middleware/Logger";
// import logger from "redux-logger";


const store = configureStore({
    reducer: {
        //reducer
        Counter: CounterReducer

    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger)

})

export default store;