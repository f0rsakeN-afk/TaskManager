import { configureStore } from "@reduxjs/toolkit";
import taskReducer from './../store/taskSlice';

const store = configureStore({
reducer:{
    task:taskReducer
}
})

export default store;