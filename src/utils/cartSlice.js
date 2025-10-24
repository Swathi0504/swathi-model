import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice(
    {
        name : "Cart",
        initialState : {
            items : [],
            count : 0,
            isShow : false
        },
        reducers : {
            addItems : (state,action) => {
                state.items.push(action.payload);
                state.count=state.count+action.payload.price;
            },
            removeItems : (state,action) => {
                state.items.pop(action.payload);
                if(state.count==0){
                    return;
                } 
                state.count=state.count-action.payload.price;
            },
            showItems : (state) => {
                state.isShow=!state.isShow;
            } 
        }  
    }
);

export const { addItems,removeItems,showItems } = cartSlice.actions;

export default cartSlice.reducer;