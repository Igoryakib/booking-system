
export interface ISlot {
    status?: boolean,
    text: string
}

export interface ICalendarDay {
    day: string,
    date: string,
    slots: ISlot[]
}

export interface IListDays {
    days: ICalendarDay[][],
}