import React ,{ useState } from 'react';
import Navbar from './Components/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from './Components/Footer';
const Root = () => {
    const [dark, setDark] = useState(false);
    return (
        <div data-theme={dark ? "dark" : 'light'}>
            <Navbar setDark={setDark}></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Root;