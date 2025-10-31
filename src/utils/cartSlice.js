import { createSlice } from "@reduxjs/toolkit";
import { act } from "react";

const cartSlice = createSlice(
    {
        name : "Cart",
        initialState : {
            items : [],
            count : 0,
            quantity : {},
            isShow : false
        },
        reducers : {
            addItems : (state,action) => {
                state.items.push(action.payload);
                state.count=state.count+action.payload.price;
            },
            removeItems : (state,action) => {
               // state.items.pop(action.payload);
               state.items = state.items.filter((item) => item.id !== action.payload.id);
                if(state.count==0){
                    return;
                } 
                state.count=state.count-action.payload.price;
            },
            showItems : (state) => {
                state.isShow=!state.isShow;
            },
            updateQuantity : (state,action)=> {
                state.quantity[action.payload.item.id]={item:action.payload.item, no:action.payload.no};
            },
            removeQuantity : (state,action)=>{
                state.quantity[action.payload.id].no=0;
            }
        }  
    }
);

export const { addItems,removeItems,showItems,updateQuantity,removeQuantity } = cartSlice.actions;

export default cartSlice.reducer;