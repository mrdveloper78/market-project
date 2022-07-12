import { Button, Modal } from "react-bootstrap";
import useProduct from "../../../Hooks/ProductHook";
import { useSelector } from "react-redux";
import LoginForm from "../../../Components/LoginForm/LoginForm";





const Login = () => {

    const { openModal, closeModal, resetForm } = useProduct();
    const modalState = useSelector(state => state.productState.modalState);

    return <>
        <Modal show={modalState} onHide={closeModal}>

            <Modal.Header closeButton>
                <Modal.Title>
                    ثبت نام
                    |
                    <i class="fa fa-sign-in" aria-hidden="true" style={{ marginLeft: 1 }} ></i>ورود
                </Modal.Title>
            </Modal.Header>

            <Modal.Body><LoginForm/></Modal.Body>

            <Modal.Footer>
                <Button variant="secondary" onClick={() => {closeModal();resetForm()}}>
                    بستن
                </Button>
                <Button variant="primary" onClick={() => {closeModal();resetForm()}}>
                    ورود
                </Button>
            </Modal.Footer>

        </Modal>
    </>
}




export default Login;