import { FC } from "react";
import StatusSlot from "./StatusSlot";
import { ICalendarDay } from "@/types/interfaces";

const CalendarItem: FC<ICalendarDay> = ({ day, date, slots, month, spaceRow }) => {
    const dayStyles = `mw-[285] h-[184] border-r-2 border-b-2 border-gray-300 p-[10] ${spaceRow && "col-span-full w-[200] mb-[40]"}`;
    return (
        month ? (
        <>
        <h4 className="text-black text-4xl font-bold font-sans ml-[10] mt-[10]">{month}</h4>
        <div className="mw-[285] h-[184] border-r-2 border-b-2 border-gray-300 p-[10]">
            <div className="flex items-center justify-between mb-[10]">
                <h4 className="text-black text-2xl font-bold font-sans">{day}</h4>
                <h4 className="text-black text-2xl font-bold font-sans">{date}</h4>
            </div>
            <ul className="h-[100] flex flex-col gap-[10] overflow-y-scroll scroll-smooth scrollbar-hide">
                {slots.map((item, idx) => <StatusSlot text={item.text} status={item.status} key={idx} />)}
            </ul>
        </div></>) : (<div className={dayStyles}>
            <div className="flex items-center justify-between mb-[10]">
                <h4 className="text-black text-2xl font-bold font-sans">{day}</h4>
                <h4 className="text-black text-2xl font-bold font-sans">{date}</h4>
            </div>
            <ul className="h-[100] flex flex-col gap-[10] overflow-y-scroll scroll-smooth scrollbar-hide">
                {slots.map((item, idx) => <StatusSlot text={item.text} status={item.status} key={idx} />)}
            </ul>
        </div>)
    );
};





export default CalendarItem;