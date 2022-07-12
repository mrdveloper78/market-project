import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useSelector } from "react-redux";
import useProduct from "../../Hooks/ProductHook";
import PasswordInput from "../Form/PasswordInput";
import TextInput from "../Form/TextInput";





const LoginForm = () => {

    const {closeModal} = useProduct();

    const { handleSubmit, formState: { errors }, register, reset,resetField } = useForm({ mode: "all" });
    const loginState = useSelector(state => state.productState.loginState);

    const userNameValidation = register("userName",{required:"لطفا نام کاربری را وارد کنید"});
    const passwordValidation = register("password",{required:"لطفا رمز عبور را وارد کنید"});

    useEffect(() => {resetField()},[closeModal]);

    return <>
        <form>
            <div className={errors.userName ? 'error input-group' : 'input-group'} >
                <TextInput model={loginState} id="userName" description="نام کاربری" validation={{...userNameValidation}} />
                {errors.userName && <p className="error-message" >{errors.userName.message}</p>}
            </div>

            <div className={errors.password ? 'error input-group' : 'input-group'} >
                <PasswordInput model={loginState} id="password" description="نام کاربری" validation={{...passwordValidation}} />
                {errors.password && <p className="error-message" >{errors.password.message}</p>}
            </div>
        </form>
    </>
}





export default LoginForm;