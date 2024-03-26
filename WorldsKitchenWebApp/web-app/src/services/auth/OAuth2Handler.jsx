import React from 'react';
import {Navigate, useSearchParams} from "react-router-dom";
import {setAuthHeader} from "../API_CONFIG";

export const OAuth2Handler = () => {
    const [searchParams] = useSearchParams();
    let token = searchParams.get("token");
    let error = searchParams.get("error");
    if (token) {
        setAuthHeader(token);
        return <Navigate to={"/profile"} />;
    }
    return <b>Auth error {error}</b>;
};
