import { useNavigate } from "react-router-dom"

export function GoBack (){
    const navigate = useNavigate();
    return () => navigate(-1);
}