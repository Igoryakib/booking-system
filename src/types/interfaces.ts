
export interface ISlot {
    status?: boolean,
    text: string
}

export interface ICalendarDay {
    day: string,
    date: string,
    month?: string,
    year?: number,
    spaceRow?: boolean,
    slots: ISlot[]
}

export interface IListDays {
    days: ICalendarDay[][],
}

export interface ICalendarState {
    days: ICalendarDay[][],
    currentMonth: number
}