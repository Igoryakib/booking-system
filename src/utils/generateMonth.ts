import { ICalendarDay } from "@/types/interfaces";
import { Dispatch, SetStateAction } from "react";

export const generateMonth = (
  setDays: Dispatch<SetStateAction<ICalendarDay[][]>>
): void => {
  const generatedDays: ICalendarDay[] = [];
  const today = new Date();
  const month = today.getMonth() + 1;
  let counterDaysOfMonth: number;
  switch(month) {
    case 2:
      counterDaysOfMonth = 28;
      break;
    case 4:
    case 6:
    case 9:
    case 11:
        counterDaysOfMonth = 30;
    break;
    default:
      counterDaysOfMonth = 31;
    break;
  }
  for (let i = 1; i <= counterDaysOfMonth; i++) {
    const futureDate = new Date();
    futureDate.setDate(i);

    const newDay = {
      day: futureDate.toDateString().slice(0, 3),
      date: futureDate.getDate().toString().padStart(2, "0"),
      slots: [{ text: "Manager 1", status: false }],
    };

    generatedDays.push(newDay);
  }
  setDays((prevDays) => [...prevDays, generatedDays]);
};
