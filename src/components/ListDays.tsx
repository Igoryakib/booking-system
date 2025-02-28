import { IListDays } from "@/types/interfaces";
import {FC} from "react";
import CalendarItem from "./CalenderItem";



const ListDays:FC<IListDays> = ({days}) => {
    return(
        <ul className="grid grid-cols-7 max-w-[1400] mt-0 mr-auto ml-auto rounded-lg after:content-[' '] relative after:absolute after:right-[0] after:block after:w-[2] after:h-full after:bg-white  before:absolute before:bottom-[0] before:block before:w-[1400] before:h-[2] before:bg-white">
            {days.map(item => item.map((day, idx) => <CalendarItem spaceRow={day.spaceRow} key={idx} month={day.month} slots={day.slots} date={day.date} day={day.day} year={day.year}/>))}
        </ul>
    );
};


export default ListDays;