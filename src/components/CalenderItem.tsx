import {FC} from "react";
import StatusSlot from "./StatusSlot";

const CalendarItem:FC = () => {
    return(
        <div className="w-[205] h-[174] border-black border-2 border-solid rounded-lg p-[10]">
            <div className="flex items-center justify-between mb-[10]">
                <h4 className="text-black text-2xl font-bold font-sans">Mon</h4>
                <h4 className="text-black text-2xl font-bold font-sans">30</h4>
            </div>
            <ul className="h-[100] flex flex-col gap-[10] overflow-y-scroll scroll-smooth scrollbar-hide">
                <StatusSlot text="manager1"/>
                <StatusSlot text="manager1"/>
            </ul>
        </div>
    );
};





export default CalendarItem;