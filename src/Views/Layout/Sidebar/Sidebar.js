import { Offcanvas } from "react-bootstrap";
import { MenuProvider } from "../../../Stores/Context/MenuContext";
import Menu from "./Menu";





const Sidebar = ({show, toggleSideBar}) => {

    const close =()=>{
        alert("dfdf")
    }

    return <div   >
        <Offcanvas backdrop={false} scroll={true} show={show} placement="start"  >

            <Offcanvas.Header >                
                <Offcanvas.Title> محصولات
                </Offcanvas.Title>
            </Offcanvas.Header>

            <Offcanvas.Body>
                <MenuProvider>
                    <Menu/>
                </MenuProvider>
            </Offcanvas.Body>

        </Offcanvas>
    </div>
}




export default Sidebar;