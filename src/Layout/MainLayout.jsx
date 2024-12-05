import React from 'react';
import Headers from '../components/Headers';
import { Outlet } from 'react-router-dom';

const MainLayout = () => {
    return (
        <div>
            <Headers></Headers>
            <Outlet></Outlet>
        </div>
    );
};

export default MainLayout;