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
        }
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
    }
})

export default StateSlice;
export const { Add_forms, Edit_forms } = StateSlice.actions;