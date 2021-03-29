import { Calendar } from "./calendar";
import { IPeriodDates } from "./calendar";
import { CalendarSettings } from "../settings/calendarSettings";
import { WeekDaySettings } from "../settings/weekDaySettings";
import { WeeksDetermintaionStandardsSettings } from "../settings/weeksDetermintaionStandardsSettings";
import { WeekStandards } from "./weekStandards";
import { Utils } from "../utils";
import { DateTimeSequence } from "powerbi-visuals-utils-formattingutils/lib/src/date/dateTimeSequence";

export class CalendarOlympus extends Calendar {

    public getMonthPeriod(date: Date): IPeriodDates {
        const year: number = date.getFullYear();
        const month: number = date.getMonth();
        var lastDayOfMonth = new Date(date.getFullYear(), date.getMonth() + 1, 0);
        var weekday: number = lastDayOfMonth.getDay();
        var offset: number = 0;
        if (month != 3) {
            switch (weekday) {
                case 0: offset = -3; break; // Sunday
                case 6: offset = -2; break; // Saturday
                default: offset = -1;
            }
        }
        const startDate: Date = new Date(year, month, 15);
        const endDate: Date = new Date(year, month + 2, 15);

        return { startDate, endDate };
    }

}