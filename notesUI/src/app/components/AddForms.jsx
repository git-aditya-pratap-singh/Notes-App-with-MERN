import React from "react";
import { useDispatch } from "react-redux";
import { Add_forms } from "../redux/Slices/StateSlice";
import InputField from "./FormComponents/InputField";
import TextAreaField from "./FormComponents/TextAreaField";
import IconComponent from "../utils/IconComponents";
import Apiauth from "../_api/auth.api";
import "../../assets/scss/_forms.scss";

const AddForms = () => {
    const dispatch = useDispatch();

    const handleAdd = async(event)=>{
        event.preventDefault();
        const formData = new FormData(event.target)
        const objFormData = Object.fromEntries(formData);
    
        if(!objFormData.heading)
            return toast.error("Title should not to be Blank!!");
        if(!objFormData.message)
            return toast.error("Description should not to be Blank!!");

        // API- Calling
        const apiResponse = await new Apiauth().AddNotes(objFormData);
        if (apiResponse.status) 
            dispatch(Add_forms(false))
        
    }

    return (
        <section className="backDiv-background">
            <div className="forms-section">
                <div className="crossIcons" onClick={() => dispatch(Add_forms(false))}><IconComponent iconType="crossIcon" /></div>
                <h2>Add New Note</h2>
                <form className="mt-5" onSubmit={handleAdd}>
                    <InputField
                        type="text"
                        name="heading"
                        placeholder="Note Title"
                        autoComplete="off"
                    />
                    <TextAreaField
                        name="message"
                        placeholder="Note Description"
                    />
                    <button className="btn-success">Add New</button>
                </form>
            </div>
        </section>
    )
}
export default AddForms;