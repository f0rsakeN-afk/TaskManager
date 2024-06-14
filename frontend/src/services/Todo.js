import { useQuery } from "@tanstack/react-query";
import Config from "../config/config";
import axios from "axios";

const getTodoAPI = async () => {
    const response = await axios.get(`${Config.BACKEND_URL}/api/v1/taskhub/`);
    return response.data;
}

export function getTodos() {
    const { isLoading, data: Todos, error } = useQuery({
        queryKey: ['todos'],
        queryFn: getTodoAPI
    })
    return { isLoading, Todos, error };
}