import { Col, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import mainStore from "../../../Stores/Redux/MainStore";
import ProductGrid from "./ProductGrid";




const ShoppingBasket = ({ productName, price }) => {

  const productList = useSelector(state => state.productState.productList);

  return <>

    <Row>
      <Col>
        <ProductGrid />
      </Col>
    </Row>
  </>

}




export default ShoppingBasket;