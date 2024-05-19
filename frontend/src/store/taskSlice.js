import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import Config from "../config/config";
import axios from "axios";

export const STATUSES = Object.freeze({
    IDLE: 'idle',
    ERROR: 'error',
    LOADING: 'loading'
})
const initialState = {
    task: [],
    status: STATUSES.IDLE
}


export const fetchTasks = createAsyncThunk('tasks/get', async (_, { rejectWithValue }) => {
    try {
        const response = await axios.get(`${Config.BACKEND_URL}/api/v1/taskhub/`);
        return response.data;
    } catch (error) {
        console.error("Failed to fetch tasks:", error);
        return rejectWithValue(error.response ? error.response.data : error.message);
    }
});

export const createTask = createAsyncThunk('tasks/create', async (taskData, { rejectWithValue }) => {
    try {
        const response = await axios.post(`${Config.BACKEND_URL}/api/v1/taskhub/`, taskData);
        return response.data;
    } catch (error) {
        console.error("Failed to create task:", error);
        return rejectWithValue(error.response ? error.response.data : error.message);
    }
});

const taskSlice = createSlice({
    name: 'task',
    initialState,
    extraReducers: (builder) => {
        builder.addCase(fetchTasks.pending, (state, action) => {
            state.status = STATUSES.LOADING;
        });
        builder.addCase(fetchTasks.fulfilled, (state, action) => {
            state.task = action.payload;
            state.status = STATUSES.IDLE;
        });
        builder.addCase(fetchTasks.rejected, (state, action) => {
            state.status = STATUSES.ERROR;
        });
        builder.addCase(createTask.pending, (state, action) => {
            state.status = STATUSES.LOADING;
        });
        builder.addCase(createTask.fulfilled, (state, action) => {
            state.task=[...state.task,action.payload]
            state.status = STATUSES.IDLE;
        });
        builder.addCase(createTask.rejected,(state,action)=>{
            state.status=STATUSES.ERROR;
        })
    }
})

export default taskSlice.reducer;