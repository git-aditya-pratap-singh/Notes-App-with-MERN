import React from "react";
import {useNavigate} from "react-router-dom"
import InputField from "./FormComponents/InputField";
import { toast } from "react-toastify";
import Apiauth from "../_api/auth.api";

import "../../assets/scss/_login.scss";

const Login = () => {

    const navigate = useNavigate();

    const handleLogin = async(event)=>{
        event.preventDefault();
        const formData = new FormData(event.target)
        const objFormData = Object.fromEntries(formData);
       
        if(!objFormData.email)
            return toast.error("Email should not to be Blank!!");
        if(!objFormData.password)
            return toast.error("Password should not to be Blank!!");

        // API- Calling
        const apiResponse = await new Apiauth().login(objFormData);
        if (apiResponse.status) {
            localStorage.setItem("tokens",JSON.stringify(apiResponse.data?.token));
            navigate("/dashboard");
        }
    }

    return (
        <section className="backDiv-Banner">
            <div className="login-section">
                <h2>Login here..</h2>
                <form className="flex flex-col gap-2" onSubmit={handleLogin}>
                    <InputField
                        type="email"
                        name="email"
                        placeholder="email"
                        autoComplete="on"
                    />
                    <InputField
                        type="password"
                        name="password"
                        placeholder="Password"
                        autoComplete="off"
                    />
                    <button className="btn-success">Login</button>
                </form>


            </div>
        </section>
    )
}
export default Login;