import React from "React";
import { render } from '@testing-library/react';
import DaysUntil from './components/DaysUntil';

describe("DaysUntil", () => {

    describe("render", () => {
        it("Should return a container", () => {
            const { container } = render(
                <DaysUntil />
            );
            expect(container).toBeDefined();
        });
    });

    describe("render", () => {

        it('should display the correct message', () => {
            const { getByTestId } = render(
                <DaysUntil />
            );
            const pageMessage = getByTestId("page-message");
            expect(pageMessage).toHaveTextContent("This page should give you a count of the number of days from today to Christmas Day, New Years Day and Valentines Day.");
        });
    });
    
});