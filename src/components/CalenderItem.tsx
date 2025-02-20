import { FC } from "react";
import StatusSlot from "./StatusSlot";
import { ICalendarDay } from "@/types/interfaces";

const CalendarItem: FC<ICalendarDay> = ({ day, date, slots, month, spaceRow, year }) => {
    const dayStyles = `mw-[285] h-[184] border-r-2 border-b-2 border-gray-300 p-[10] ${spaceRow && "col-span-full w-[200] mb-[40]"} ${day === 'Sat' ? "col-start-6" : day === 'Sun' ? "col-start-7" : day === 'Fri' ? "col-start-5" : day === 'Thu' ? "col-start-4" : day === 'Wed' ? "col-start-3" : day === 'Tue' ? "col-start-2" : "col-start-1"}`;
    const firstDay = `text-black text-4xl font-bold font-sans ml-[10] mt-[10] border-b-2 border-r-2 border-gray-300 ${day === 'Sat' ? "col-start-5" : day === 'Sun' ? "col-start-6" : day === 'Fri' ? "col-start-4" : day === 'Thu' ? "col-start-3" : day === 'Wed' ? "col-start-2" : day === 'Tue' ? "col-start-1" : 'col-span-full'}`;
    return (
        month ? (
        <>
        <h4 className={firstDay}>{month}<span className="ml-[20px]">{year}</span></h4>
        <div className="mw-[285] h-[184] border-r-2 border-b-2 border-gray-300 p-[10]">
            <div className="flex items-center justify-between mb-[10]">
                <h4 className="text-black text-2xl font-bold font-sans">{day}</h4>
                <h4 className="text-black text-2xl font-bold font-sans">{date}</h4>
            </div>
            <ul className="h-[100] flex flex-col gap-[10] overflow-y-scroll scroll-smooth scrollbar-hide">
                {slots.map((item, idx) => <StatusSlot text={item.text} status={item.status} key={idx} />)}
            </ul>
        </div>
        </>
        ) 
        : (<div className={dayStyles}>
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