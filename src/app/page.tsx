'use client'
import { useState, useEffect, useCallback } from "react";
import ListDays from "@/components/ListDays";
import { ICalendarDay } from "@/types/interfaces";
import { generateMonth } from "@/utils/generateMonth";
import { InView } from "react-intersection-observer";


const Home = () => {
  const [days, setDays] = useState<ICalendarDay[][]>([]);
  useEffect(() => {
    generateMonth(setDays);
  }, []);
  const handleView = useCallback((inView: boolean) => {
    if (inView) {
      setTimeout(() => generateMonth(setDays), 0);
    }
  }, []);
  return (
    <main className="mt-[60] mr-auto ml-auto">
      <ListDays days={days.map(item => item)} />
      <InView onChange={handleView}>
        {({ ref }) => <span ref={ref}>.</span>}
      </InView>
    </main>
  );
}


export default Home;