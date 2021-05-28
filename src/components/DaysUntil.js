import React, { useState } from 'react';
import { daysBetweenDates } from "../utils/daysBetweenDates";

const DaysUntil = () => {
    
    //State
    const [isClicked, setisClicked] = useState(false);
    const handleButtonClickForDates = () => setisClicked(!isClicked);

    //Variables
    const christmasDayAsDate = new Date(2021, 12, 25);
    const valentinesDayAsDate = new Date(2022, 2, 14);
    const newYearsDayAsDate = new Date(2022, 1, 1);
    const todaysDayDate = new Date();
    const explanationMessage = "This page should give you a count of the number of days from today to Christmas Day, New Years Day and Valentines Day.";

    //Render
    return (
    <section>
        <p data-testid="page-message">{explanationMessage}</p>
        {isClicked ? 
            <ul>
                <li>{daysBetweenDates(christmasDayAsDate, todaysDayDate)} days until Christmas</li>
                <li>{daysBetweenDates(newYearsDayAsDate, todaysDayDate)} days until New Year</li>
                <li>{daysBetweenDates(valentinesDayAsDate, todaysDayDate)} days until Valentines Day</li>
            </ul> 
        : null
        }
        <button onClick={ handleButtonClickForDates }>{isClicked ? "Hide Days" : "Show Days"}</button>
    </section>
    );
};

export default DaysUntil;
