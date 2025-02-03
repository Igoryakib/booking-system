import { IListDays } from "@/types/interfaces";
import {FC} from "react";
import CalendarItem from "./CalenderItem";



const ListDays:FC<IListDays> = ({days}) => {
    return(
        <ul className="grid grid-cols-5 max-w-[1400] mt-0 mr-auto ml-auto rounded-lg border-black border-2 border-solid">
            {days.map(item => item.map((day, idx) => <CalendarItem key={idx} slots={day.slots} date={day.date} day={day.day}/>))}
        </ul>
    );
};


export default ListDays;