import React from 'react';
import ReactDOM from 'react-dom/client';
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import SignIn from "./pages/SignIn";
import TODO from "./pages/TODO";

const root = ReactDOM.createRoot(document.getElementById('root'));

const router = createBrowserRouter([
    {

        children: [
            {
                path: "/",
                element: <App/>,
            },
            {
                path: "/signin",
                element: <SignIn/>,
            },
            {
                path: "/todo",
                element: <TODO/>
            }
        ],
    },
],);


root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
