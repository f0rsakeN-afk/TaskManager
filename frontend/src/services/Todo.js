import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import Config from "../config/config";
import axios from "axios";
import toast from "react-hot-toast";


//GETTING TODOS FROM API
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


//CREATING TODOS
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
            //console.log('success');
        }, onError: (err) => {
            toast.error('Todo creation failed');
            console.log('Todo creation failed', err);
        }
    })
    return { isCreating, create }
}


//DELETING TODOS
const deleteTodoAPI = async (id) => {
    const response = await axios.delete(`${Config.BACKEND_URL}/api/v1/taskhub/${id}`);
    return response.data;
}

export function deleteTodo() {
    const queryClient = useQueryClient();
    const { isLoading: isDeleting, mutate: delet } = useMutation({
        mutationFn: deleteTodoAPI,
        onSuccess: () => {
            toast.success('Todo deletion successful');
            queryClient.invalidateQueries({
                queryKey: ['todos']
            })
        },
        onError: (err) => {
            toast.error('Todo deletion failed', err)
        }
    })
    return { isDeleting, delet }
}

//EDITING TODOS
const editTodoAPI = async (data) => {
    const response = await axios.patch(`${Config.BACKEND_URL}`);
    return response.data;
}

export function updateTodo() {
    const queryClient = useQueryClient();
    const { isLoading: isEditing, mutate: edit } = useMutation({
        mutationFn: editTodoAPI,
        onSuccess: () => {
            toast.error('Todo update successfull');
            queryClient.invalidateQueries({
                queryKey: ['todos']
            })
        },
        onError: (err) => {
            console.log('todo edit failed', err);
            toast.error('Todo update failed', err);
        }
    })
    return { isEditing, edit }
}
