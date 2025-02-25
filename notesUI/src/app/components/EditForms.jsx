import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Edit_forms, notesDataFunc } from "../redux/Slices/StateSlice";
import InputField from "./FormComponents/InputField";
import TextAreaField from "./FormComponents/TextAreaField";
import IconComponent from "../utils/IconComponents";
import Apiauth from "../_api/auth.api";
import "../../assets/scss/_forms.scss";
import { toast } from "react-toastify";

const EditForms = () => {
    const dispatch = useDispatch();
    const editFormState = useSelector((store) => store.openPopup.editForms);

    const [formData, setFormData] = useState({
        title: "",
        description: "",
    });

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleEdit = async (event) => {
        event.preventDefault();

        if (!formData.title) return toast.error("Title should not be blank!");
        if (!formData.description) return toast.error("Description should not be blank!");

        const apiResponse = await new Apiauth().EditNotes(editFormState.id, formData);
        if (apiResponse.status){
            dispatch(Edit_forms({ status: false, id: null, title: null, description: null })); 
            const getNotes = await new Apiauth().GetNotes();
            dispatch(notesDataFunc(getNotes)) 
        } 
    };

    useEffect(() => {
        if (editFormState) {
            setFormData({
                title: editFormState.title,
                description: editFormState.description
            });
        }
    }, [editFormState]);

    return (
        <section className="backDiv-background">
            <div className="forms-section">
                <div
                    className="crossIcons"
                    onClick={() => dispatch(Edit_forms({ status: false, id: null, title: null, description: null }))}
                >
                    <IconComponent iconType="crossIcon" />
                </div>

                <h2>Edit Note</h2>

                <form className="mt-5" onSubmit={handleEdit}>
                    <InputField
                        type="text"
                        name="title"
                        value={formData.title}
                        onChange={handleChange}
                        placeholder="Note Title"
                        autoComplete="off"
                    />
                    <TextAreaField
                        name="description"
                        value={formData.description}
                        onChange={handleChange}
                        placeholder="Note Description"
                    />
                    <button type="submit" className="btn-success">Update Note</button>
                </form>
            </div>
        </section>
    );
};

export default EditForms;
