import ProductPageFormat from "../../PagesComponents/ProductPageFormat";
import { useSelector } from "react-redux";





const UPPage = () => {

    const UtilProductList = useSelector(state => state.productState.UtilProductList);

    return<>
    <ProductPageFormat model={UtilProductList} />
    </>
}




export default UPPage;