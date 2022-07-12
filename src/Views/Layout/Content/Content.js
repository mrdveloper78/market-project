import { Outlet } from "react-router-dom";




const Content = () => {
    return <>
        <div style={{ minHeight: 830, backgroundColor: "rgba(82, 192, 231, 0.795)", padding: 20,  }}>
            <Outlet/>         
        </div>
    </>
}




export default Content;