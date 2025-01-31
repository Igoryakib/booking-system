import {FC} from "react";
import StatusSlot from "./StatusSlot";
import { ICalendarDay } from "@/types/interfaces";

const CalendarItem:FC<ICalendarDay> = ({day, date, slots}) => {
    return(
        <div className="w-[205] h-[174] border-black border-2 border-solid rounded-lg p-[10]">
            <div className="flex items-center justify-between mb-[10]">
                <h4 className="text-black text-2xl font-bold font-sans">{day}</h4>
                <h4 className="text-black text-2xl font-bold font-sans">{date}</h4>
            </div>
            <ul className="h-[100] flex flex-col gap-[10] overflow-y-scroll scroll-smooth scrollbar-hide">
                {slots.map((item, idx) => <StatusSlot text={item.text} status={item.status} key={idx}/>)}
            </ul>
        </div>
    );
};





export default CalendarItem;