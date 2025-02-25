import React from "react";
import IconComponent from "../utils/IconComponents";
import { notesDataFunc } from "../redux/Slices/StateSlice";
import { useDispatch } from "react-redux";
import { Edit_forms } from "../redux/Slices/StateSlice";
import Apiauth from "../_api/auth.api";
import "../../assets/scss/_card.scss";

const Card = ({_id, title, description})=>{

    const dispatch = useDispatch();
    const deleteNote = async(id)=>{
        const apiResponse = await new Apiauth().DeleteNotes(id);
        if (apiResponse.status){
            const getNotes = await new Apiauth().GetNotes();
            dispatch(notesDataFunc(getNotes))
        }       
    }
    
    return(
        <section className="card-section">
            <div className="card-header">
                <h2>{title}</h2>
                <p>{description}</p>
            </div>

            <div className="card-footer">
                <span onClick={()=> dispatch(Edit_forms({'status': true, 'id': _id, 'title': title, 'description': description}))}><IconComponent iconType="editIcon" iconColor="#019424"/></span>
                <span onClick={()=>deleteNote(_id)}><IconComponent iconType="deleteIcon" iconSize={20} iconColor="#fc032c" /></span>
            </div>

        </section>
    )
}
export default Card;