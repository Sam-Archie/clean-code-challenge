import { daysBetweenDates } from "./daysBetweenDates";

describe("daysBetweenDates", () => {
    it("Should return the difference between two dates as a number", () => {
        const dateOne = new Date(2021, 5, 28);
        const dateTwo = new Date(2021, 5, 10);
        expect(daysBetweenDates(dateOne, dateTwo)).toBe(18);
    })
})