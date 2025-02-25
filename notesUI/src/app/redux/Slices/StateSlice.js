import { createSlice } from "@reduxjs/toolkit";

const StateSlice = createSlice({
    name: "stateData",
    initialState: {
        addForms: false,
        editForms: {
            status: false,
            id: null,
            title: null,
            description: null
        },
        notesData: null,
    },
    reducers: {
        Add_forms: (state, action) => {
            state.addForms = action.payload;
        },
        Edit_forms: (state, action) => {
            const { status, id, title, description } = action.payload;
            state.editForms = {
                status,
                id,
                title,
                description
            };
        },
        notesDataFunc: (state, action)=>{
            state.notesData = action.payload;
        }
    }
})

export default StateSlice;
export const { Add_forms, Edit_forms, notesDataFunc } = StateSlice.actions;