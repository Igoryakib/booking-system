import { createAction } from "@reduxjs/toolkit";
import {CALENDAR_MONTH } from "./action-types";


const monthCalendar = createAction<number>(CALENDAR_MONTH);

export {
    monthCalendar,
};