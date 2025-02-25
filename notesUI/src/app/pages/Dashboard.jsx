import React, {useState, useEffect} from "react";
import { useLoaderData } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import NavBar from "../components/NavBar";
import Card from "../components/Card";
import AddForms from "../components/AddForms";
import EditForms from "../components/EditForms";
import IconComponent from "../utils/IconComponents";
import { Add_forms,notesDataFunc } from "../redux/Slices/StateSlice";
import "../../assets/scss/_dashboard.scss";

const Dashboard = () => {

    const fetchItem = useLoaderData() || [];
    const dispatch = useDispatch();
    const AddformState = useSelector((store) => store.openPopup.addForms);
    const EditformState = useSelector((store) => store.openPopup.editForms);
    const fetchItems = useSelector((store) => store.openPopup.notesData) || [];

    useEffect(()=>{
        dispatch(notesDataFunc(fetchItem));
    },[])

    return (
        <section>
            {AddformState && <AddForms />}
            {EditformState.status && <EditForms {...EditformState}/>}
            <NavBar />
            <div className="grid-system">
                {fetchItems.length > 0 ? (
                    fetchItems.map((item, index) => (
                        <Card {...item} key={item._id || index} />
                    ))
                ) : (
                    <p>No items available</p> 
                )}
            </div>

            <div className="add-items" onClick={() => dispatch(Add_forms(true))}>
                <IconComponent iconType="plusIcon" />
            </div>
        </section>
    );
};

export default Dashboard;
