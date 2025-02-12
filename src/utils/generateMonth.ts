import { ICalendarDay } from "@/types/interfaces";

export const generateMonth = (nextPreviousMonth?: number): ICalendarDay[] => {
  const generatedMonth: ICalendarDay[] = [];
  const currentYear = new Date().getFullYear();
  const month = nextPreviousMonth ? nextPreviousMonth : new Date().getMonth() + 1;
  const counterDaysOfMonth = new Date(currentYear, month, 0).getDate();

  for (let i = 1; i <= counterDaysOfMonth; i++) {
    const futureDate = new Date(currentYear, month - 1, i);

    const newDay = {
      day: futureDate.toLocaleDateString("en-US", { weekday: "short" }),
      date: futureDate.getDate().toString().padStart(2, "0"),
      month: i === 1 ? futureDate.toLocaleDateString("en-US", { month: "short" }) : '',
      spaceRow: i === counterDaysOfMonth ? true : false, 
      slots: [{ text: "Manager 1", status: false }],
    };

    generatedMonth.push(newDay);
  }
  return generatedMonth;
};
