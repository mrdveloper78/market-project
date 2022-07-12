import { useContext } from "react";
import { Link } from "react-router-dom";
import { MenuContext } from "../../../Stores/Context/MenuContext";





const MenuItem = ({ title, icon, number, to }) => {

    const { activeMenu, selectMenu } = useContext(MenuContext)

    return <>
        <li className={activeMenu === number ? "active" : ""} >
            <a className="nav-link" onClick={() => selectMenu(number)}>
                <Link className="nav-link"  to={to} >
                    <i className={icon}></i>
                    <span className="title">{title}</span>
                    <span className="fa fa-chevron-left"></span>
                </Link>
            </a>
        </li>
    </>
}




export default MenuItem;