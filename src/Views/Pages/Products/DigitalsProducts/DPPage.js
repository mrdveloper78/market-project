import ProductPageFormat from "../../PagesComponents/ProductPageFormat";
import { useSelector } from "react-redux";





const DPPage = () => {

    const DigitalProductList = useSelector(state => state.productState.DigitalProductList);

    return<div >
    <ProductPageFormat model={DigitalProductList} />
    </div>
}




export default DPPage;