import { ICalendarDay } from "@/types/interfaces";
import { Dispatch, SetStateAction } from "react";

export const generateWeek = (
  setDays: Dispatch<SetStateAction<ICalendarDay[][]>>
): void => {
  const generatedDays: ICalendarDay[] = [];
  const today = new Date();
  for (let i = 0; i < 7; i++) {
    const futureDate = new Date();
    futureDate.setDate(today.getDate() + i);

    const newDay = {
      day: futureDate.toDateString().slice(0, 3),
      date: futureDate.getDate().toString().padStart(2, "0"),
      slots: [{ text: "Manager 1", status: false }],
    };

    generatedDays.push(newDay);
  }
  setDays((prevDays) => [...prevDays, generatedDays]);
};
