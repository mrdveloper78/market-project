import { useDispatch, useSelector } from "react-redux";
import { successMessage } from "../Utils/AlertMessage/AlertMessage";





const useProduct = () => {

    const dispatch = useDispatch();

    const openModal = () => {
        dispatch({type:"openModal"});
    }

    const closeModal = () => {
        dispatch({type:"closeModal"});
    }

    const resetForm = () => {
        dispatch({type:"resetForm"});
    }

    const increament = () => {
        dispatch({type:"increament"});
    }

    const decreament = () => {
        dispatch({type:"decreament"});
    }

    const register = (val) => {
        console.log(val);
        dispatch({type:"register",payload:val});
        successMessage("محصول به سبد خرید افزوده شد");
    }

    const deleteAgRow = (p) => {
        dispatch({type:"delete", payload:p});
    }



    return{openModal,closeModal,resetForm,increament,decreament,register, deleteAgRow};
}




export default useProduct;