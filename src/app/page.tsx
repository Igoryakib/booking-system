'use client'
import { useState } from "react";
import ListDays from "@/components/ListDays";
import { ICalendarDay } from "@/types/interfaces";


export default function Home() {
  const [days, setDays] = useState<ICalendarDay[][]>([]);
  const generateWeek = () => {
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
  }
  return (
    <>
      <ListDays days={days.map(item => item)} />
      <button onClick={generateWeek}>Generate day</button>
    </>
  );
}
