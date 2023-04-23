import React from 'react';
import {Route, Routes} from "react-router-dom";
import {publicRoutes} from "../routes";
import NotfoundPage from "../pages/Notfoundpage/NotfoundPage";

const AppRouter = () => {
    return (
        <Routes>
            {publicRoutes.map(({path, Component}) =>
                <Route key={path} path={path} element={<Component/>}/>
            )}
            <Route path={'*'} element={<NotfoundPage/>}/>
        </Routes>
    );
};

export default AppRouter;
