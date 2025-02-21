import React from "react";
import {useNavigate} from "react-router-dom";
import IconComponent from "../utils/IconComponents";
import { toast } from "react-toastify";
import "../../assets/scss/_navbar.scss";

const NavBar = () => {
    const navigate = useNavigate();
    const logout = ()=>{
        toast.success('Logged-Out!!')
        localStorage.removeItem('tokens')
        navigate("/")
    }
    return (
        <section className="header-navbar">
            <label>NotesApp</label>
            {/* <input type="search" placeholder="Search here..."/> */}
            <div className="username-navbar">
                <span className="flex items-center gap-2"> <IconComponent iconType="userIcon"/> Aditya</span>
                <button onClick={logout}>Logout</button>
            </div>
        </section>
    )
}
export default NavBar;