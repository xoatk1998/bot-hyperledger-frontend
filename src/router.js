import React from 'react';
import Home from '../src/components/home'
// import SideBar from "../src/components/nav"
import src from '*.jpg';
const routes =[
    {
        path :'/',
        isPublic : true,
        main: <Home />
    },
    {
        path :'/nav',
        isPublic : true,
        // main : <SideBar />
    }
]
export default routes;
