import { useContext } from "react"
import { MenuContext } from "../../../Stores/Context/MenuContext"
import MenuItem from "./MenuItem";





const Menu = () => {

    const { menus } = useContext(MenuContext);

    return <>
        <div className="menu_section" >
            <ul className="nav side-menu page-sidebar-menu side-show" >
                {
                    menus && menus.map(
                        (value,index) => <MenuItem key={index} number={index} title={value.title} icon={value.icon} to={value.to} />
                    )
                }
            </ul>
        </div>
    </>
}




export default Menu