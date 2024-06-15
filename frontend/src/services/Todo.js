import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import Config from "../config/config";
import axios from "axios";
import toast from "react-hot-toast";

const getTodoAPI = async () => {
    const response = await axios.get(`${Config.BACKEND_URL}/api/v1/taskhub/`);
    return response.data;
}

export function getTodos() {
    const { isLoading, data, error } = useQuery({
        queryKey: ['todos'],
        queryFn: getTodoAPI
    })
    return { isLoading, data, error };
}



const createTodoAPI = async (newTodo) => {
    const response = await axios.post(`${Config.BACKEND_URL}/api/v1/taskhub/`, newTodo);
    return response.data;
}

export function createTodo() {

    const queryClient = useQueryClient();
    const { isLoading: isCreating, mutate: create } = useMutation({
        mutationFn: createTodoAPI,
        onSuccess: () => {
            toast.success('Todo creation successfull')
            queryClient.invalidateQueries({
                queryKey: ['todos']
            })
            console.log('success');
        }, onError: (err) => {
            toast.error('Todo creation failed');
            console.log('Todo creation failed', err);
        }
    })
    return { isCreating, create }
}

const deleteTodoAPI = async () => {

}