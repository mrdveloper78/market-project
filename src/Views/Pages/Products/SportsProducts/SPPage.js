import ProductPageFormat from "../../PagesComponents/ProductPageFormat";
import { useSelector } from "react-redux";





const SPPage = () => {

    const SportProductList = useSelector(state => state.productState.SportProductList)

    return<>
    <ProductPageFormat model={SportProductList} />
    </>
}





export default SPPage;