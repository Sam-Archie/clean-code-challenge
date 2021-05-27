import React, { useState } from 'react';

const DaysUntil = () => {
    
    const [isClicked, setisClicked] = useState(false);

    const christmasDayAsDate = new Date(2021, 12, 25);
    const valentinesDayAsDate = new Date(2022, 2, 14);
    const newYearsDayAsDate = new Date(2022, 1, 1);
    const todaysDayDate = new Date();

    const differenceInDaysBetweenTwoDates = (dateOne, dateTwo) => parseInt((dateOne - dateTwo)/(24*3600*1000));
    const handleButtonClickForDates = () => setisClicked(!isClicked)
    
    const explanationMessage = "This page should give you a count of the number of days from today to Christmas Day, New Years Day and Valentines Day."
    return (
        <section>
            <p>{explanationMessage}</p>
            {isClicked ? 
                <ul>
                    <li>{differenceInDaysBetweenTwoDates(christmasDayAsDate, todaysDayDate)} days until Christmas</li>
                    <li>{differenceInDaysBetweenTwoDates(newYearsDayAsDate, todaysDayDate)} days until New Year</li>
                    <li>{differenceInDaysBetweenTwoDates(valentinesDayAsDate, todaysDayDate)} days until Valentines Day</li>
                </ul>
                    : null
            }
            <button onClick={ handleButtonClickForDates }>{isClicked ? "Hide Days" : "Show Days"}</button>
        </section>
    );
};

export default DaysUntil;