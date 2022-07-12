import { Button, Container, Dropdown, Nav, Navbar, NavItem } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";
import { Spin as Hamburger } from 'hamburger-react';
import { useState } from "react";
import useProduct from "../../../Hooks/ProductHook";
import Login from "../../Pages/PagesComponents/Login";
import { useSelector } from "react-redux";





const Header = ({ toggleSideBar }) => {

    const [isOpen, setOpen] = useState(false);
    const { openModal } = useProduct();
    const basketState = useSelector(state => state.productState.basketState);

    return <div >

        <Navbar bg="dark" expand={false} >
            <Container fluid>

                <NavLink to={"/"} >

                    <Link to="/shoppingBasket" >
                        <Button variant="outline-primary" size="lg" active={false}  >
                            <i className="fa fa-shopping-basket" aria-hidden="true">{basketState}</i>
                        </Button>
                    </Link>
                    
                    <Button variant="outline-primary" size="lg" active={false} onClick={() => openModal()} >
                        ثبت نام
                        |
                        <i className="fa fa-sign-in" aria-hidden="true" style={{ marginLeft: 1 }} ></i>ورود
                    </Button>

                </NavLink>

                <Navbar.Brand href=""></Navbar.Brand>
                <Hamburger toggle={setOpen} toggled={isOpen} onToggle={toggleSideBar} distance="md" rounded label="منو" color="#ffff00" />
            </Container>
        </Navbar>
        <Login />
    </div>
}




export default Header;