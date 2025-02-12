'use client'
import { useState, useEffect, useCallback } from "react";
import ListDays from "@/components/ListDays";
import { ICalendarDay } from "@/types/interfaces";
import { generateMonth } from "@/utils/generateMonth";
import { InView } from "react-intersection-observer";


const Home = () => {
  const [days, setDays] = useState<ICalendarDay[][]>([]);
  const [month, setMonth] = useState<number>(new Date().getMonth() + 1);
  useEffect(() => {
    setDays([generateMonth()])
  }, []);
  const handleView = useCallback((inView: boolean) => {
    if (inView) {
      setMonth((prevMonth) => {
        const nextMonth = prevMonth + 1;
        setDays((prevDays) => [...prevDays, generateMonth(nextMonth)])
        // window.scrollTo({ top: document.body.scrollHeight / 0.5, behavior: "smooth" });

        return nextMonth;
      });
    }
  }, []);
  return (
    <>
      <main className="mt-[60] mr-auto ml-auto">
        <ListDays days={days.map(item => item)} />
        <InView onChange={handleView}>
        {({ ref }) => <span className=" block mt-[40]" ref={ref}>.</span>}
      </InView>
      </main>
    </>
  );
}


export default Home;