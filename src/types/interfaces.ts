
export interface ISlot {
    status?: boolean,
    text: string
}

export interface ICalendarDay {
    day: string,
    date: string,
    month?: string,
    spaceRow?: boolean,
    slots: ISlot[]
}

export interface IListDays {
    days: ICalendarDay[][],
}