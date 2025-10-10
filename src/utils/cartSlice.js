import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice(
    {
        name : "Cart",
        initialState : {
            items : [],
            count : 0
        },
        reducers : {
            addItems : (state,action) => {
                state.items.push(action.payload);
                state.count=state.count+state.items[0].price;
            }
        }
    }
);

export const { addItems } = cartSlice.actions;

export default cartSlice.reducer;