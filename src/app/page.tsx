'use client'
import { useCallback } from "react";
import ListDays from "@/components/ListDays";
import { ICalendarDay } from "@/types/interfaces";
import { InView } from "react-intersection-observer";
import { monthCalendar } from "@/redux/actions";
import { useAppDispatch, useAppSelector } from "@/hooks/hooks";


const Home = () => {
  const month = useAppSelector(state => state.calendarData.currentMonth)
  const days = useAppSelector(state => state.calendarData.days)
  const dispatch = useAppDispatch();
  const handleView = useCallback((inView: boolean) => {
    if (inView) {
      dispatch(monthCalendar(month + 1));
      window.scrollTo({ top: document.body.scrollHeight / 0.5, behavior: "smooth" });
    }
  }, [dispatch, month]);
 
  return (
      <main className="mt-[60] mr-auto ml-auto">
        <ListDays days={days.map((item: ICalendarDay[]) => item)} />
        <InView onChange={handleView}>
          {({ ref }) => <span className=" block mt-[40]" ref={ref}>.</span>}
        </InView>
      </main>
  );
}


export default Home;