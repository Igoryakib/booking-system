import { ISlot } from "@/types/interfaces";
import {FC} from "react";


const StatusSlot:FC<ISlot> = ({text, status}) => {
    const slotClasses = `w-[133px] pt-[2px] pb-[2px] pr-[10px] pl-[10px] rounded-lg text-white font-sans font-normal text-sm
    ${status? "bg-green-500" : "bg-red-500"}`;
    return(
        <li className={slotClasses}>{text}</li>
    );
};


export default StatusSlot;