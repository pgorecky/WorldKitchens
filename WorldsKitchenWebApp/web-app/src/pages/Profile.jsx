import {useState} from "react";
import {getRequest} from "../services/API_CONFIG";

export default function Profile() {
    const [response, setResponse] = useState();


    getRequest('/me').then(r => {
        setResponse(r.data.email);
    });

    return (
        <p>{response}</p>
    )
}