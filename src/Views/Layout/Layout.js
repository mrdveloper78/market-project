import { useState } from 'react';
import { Stack } from 'react-bootstrap';
import Content from './Content/Content';
import Footer from './Footer/Footer';
import Header from './Header/Header';
import Sidebar from './Sidebar/Sidebar';




const Layout = () => {

    const [sidebar,setSidebar] = useState(true);

    const toggleSideBar = () => {
        setSidebar(!sidebar);
    }

    return <>
        <Stack gap={2} className="main" style={{direction:"ltr", marginRight: sidebar ? 230 : 0,backgroundColor:"rgba(82, 192, 231, 0.795)"}} >
            <Header toggleSideBar={toggleSideBar} />
            <Content />
            <Footer />
        </Stack>
        <Sidebar show={sidebar} toggleSideBar={toggleSideBar} />
    </>
}





export default Layout;