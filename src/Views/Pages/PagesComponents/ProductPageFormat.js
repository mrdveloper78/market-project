import Card from 'react-bootstrap/Card';
import { Row, Col, Button } from "react-bootstrap";
import useProduct from '../../../Hooks/ProductHook';
import { useSelector } from 'react-redux';
import { useState } from 'react';




const ProductPageFormat = ({ model }) => {

    const {increament,register} = useProduct();
    const product = useSelector(state => state.productState.product);
    const productList = useSelector(state => state.productState.productList);

    const [view,setView] = useState(productList);
    const handleView = (val) => {
        console.log(val)
        
    }



    return (
        <>
            <Row >
                <Col className='card-style' >
                    {
                        model && model.map(
                            (value, index) =>
                                <Card key={index} style={{ width: "22%" }} >
                                    <Card.Img variant="top" src={value.imgSrc} style={{ width: "48%" }} />
                                    <Card.Body>
                                        <Card.Title>{value.productName}</Card.Title>
                                        <Card.Text>
                                            This is a wider card with supporting text below as a natural lead-in
                                            to additional content. This content is a little bit longer.
                                        </Card.Text>
                                    </Card.Body>
                                    <Card.Footer>
                                        <small className="text-muted">
                                            <i className="fa fa-money" style={{ marginRight: "1rem" }} aria-hidden="true"></i>
                                            {value.price}
                                            <h6 style={{ float: "right", top: 0 }} > :قیمت</h6>
                                        </small><br/>
                                        <Button onClick={() => {increament();register(value)}} >افزودن به سبدخرید</Button>
                                    </Card.Footer>
                                </Card>                                
                        )
                    }
                </Col>
            </Row>




        </>
    );
}





export default ProductPageFormat;