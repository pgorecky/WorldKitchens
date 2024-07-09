import React from 'react';
import ReactDOM from 'react-dom/client';
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import SignIn from "./pages/SignPages/SignIn";
import TODO from "./pages/TODO";
import SignUp from "./pages/SignPages/SignUp";
import {LANDING_PAGE, MEAL_PAGE, PROFILE_PAGE, SIGN_IN_PAGE, SIGN_UP_PAGE, TODO_PAGE} from "./const/Consts";
import {OAuth2Handler} from "./services/auth/OAuth2Handler";
import ProfilePage from "./pages/ProfilePage";
import MealPage from "./pages/MealPage";

const root = ReactDOM.createRoot(document.getElementById('root'));

const router = createBrowserRouter([
    {

        children: [
            {
                path: LANDING_PAGE,
                element: <App/>,
            },
            {
                path: SIGN_IN_PAGE,
                element: <SignIn/>,
            },
            {
                path: SIGN_UP_PAGE,
                element: <SignUp/>,
            },
            {
                path: TODO_PAGE,
                element: <TODO/>
            },
            {
                path: "/oauth2/redirect",
                element: <OAuth2Handler/>,
            },
            {
                path: PROFILE_PAGE,
                element: <ProfilePage/>,
            },
            {
                path: MEAL_PAGE,
                element: <MealPage/>,
            },
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
