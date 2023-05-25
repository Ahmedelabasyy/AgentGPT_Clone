import { createSlice } from "@reduxjs/toolkit";

export const statesSlice = createSlice({
    name: 'state',
    initialState: {
        agentResult: [],
        savedChats: []
    },
    reducers: {
        agentResults: (state, action) => {
            state.agentResult = [action.payload];
            console.log("agenttttttt", state.agentResult);
        },
        clearAgent: (state) => {
            state.agentResult = [];
            console.log("agenttttttt", state.agentResult);

        },
        saveChat: (state,action) => {
            state.savedChats = [...state.savedChats, action.payload];
            console.log("saved chatsssss", state.savedChats);
            localStorage.clear();
            localStorage.setItem("saved", state.savedChats);
        },
        deleteChat: (state, action) => {
            state.savedChats = state.savedChats.filter(
                (item) => Object.keys(item)[0] !== Object.keys(state.savedChats[action.payload])[0]
            );
            localStorage.clear();
            localStorage.setItem("saved", state.savedChats);
        }
    }
});

export const {agentResults, clearAgent, saveChat, deleteChat} = statesSlice.actions;
export default statesSlice.reducer;