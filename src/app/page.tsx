'use client'
import { useState, useEffect, useCallback } from "react";
import ListDays from "@/components/ListDays";
import { ICalendarDay } from "@/types/interfaces";
import { generateWeek } from "@/utils/generateFunc";
import { InView } from "react-intersection-observer";


const Home = () => {
  const [days, setDays] = useState<ICalendarDay[][]>([]);
  useEffect(() => {
    generateWeek(setDays);
    generateWeek(setDays);
    generateWeek(setDays);
  }, []);
  const handleView = useCallback((inView: boolean) => {
    if (inView) {
      setTimeout(() => generateWeek(setDays), 0);
    }
  }, []);
  return (
    <>
      <ListDays days={days.map(item => item)} />
      <InView onChange={handleView}>
        {({ ref }) => <span ref={ref}>.</span>}
      </InView>
    </>
  );
}


export default Home;