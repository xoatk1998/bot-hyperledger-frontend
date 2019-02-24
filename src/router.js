import React from 'react';
import Home from '../src/components/home'
// import SideBar from "../src/components/nav"
import src from '*.jpg';
import SignIn from "../src/components/SignIn"
const routes =[
    {
        path :'/',
        isPublic : true,
        main: <Home />
    },
    {
        path :'/signin',
        isPublic : true,
        main : <SignIn />

    }
]
export default routes;
