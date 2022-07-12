import { createContext, useState } from "react";





const MenuContext = createContext();


const MenuProvider = ({children}) => {

    const menus = [
        {title:"محصولات الکترونیک", icone:"	fas fa-laptop-house", to : "digitalProduct"},
        {title:"کالای ورزشی", icone:"fas fa-dumbbell", to:"/sportProduct"},
        {title:"ابزارآلات", icone:"fa fa-wrench", to :"/utilityProduct"},
        {title:"سبد خرید",icone:"fa fa-shopping-basket",to:"/shoppingBasket"}
    ];

    const [activeMenu,setActiveMenu] = useState(0);
//
    const selectMenu = (number) => {
        setActiveMenu(number);
    }

    return<MenuContext.Provider value={{menus, activeMenu, selectMenu}} >
        {children}
    </MenuContext.Provider>
}


export{MenuProvider,MenuContext};