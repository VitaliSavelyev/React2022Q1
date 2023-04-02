import Home from "../src/routes/home/home";
import Header from "./header/header";
import About from "../src/routes/about/about";
import Form from "../src/routes/forms/forms";
import {useRoutes} from "react-router-dom";
import NotFound from "../src/routes/notfound/notFound";
import React from "react";

const App = () => {
    const routes = useRoutes([
        {path: '/', element: <Home/>},
        {path: '/about', element: <About/>},
        {path: '/form', element: <Form/>},
        {path: '*', element: <NotFound/>},
    ]);
    return (
        <>
            <Header/>
            {routes}
        </>
    );
};

export default App;
