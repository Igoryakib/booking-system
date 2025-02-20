import { combineReducers, createReducer, PayloadAction } from "@reduxjs/toolkit";
import { monthCalendar } from "./actions";
import { generateMonth } from "@/utils/generateMonth";




const currentMonth = createReducer(new Date().getMonth() + 1, (builder) => {
    builder.addCase(monthCalendar, (_, action: PayloadAction<number>) => action.payload)
});


const days = createReducer([generateMonth()], (builder) => {
    builder.addCase(monthCalendar, (state, action: PayloadAction<number>) => [...state, generateMonth(action.payload)])
});




export default combineReducers({
    currentMonth,
    days
})