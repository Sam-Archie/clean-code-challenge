
/* Takes to dates and returns the diffence in days as a number */ 
export const daysBetweenDates = (dateOne, dateTwo) => parseInt((dateOne - dateTwo)/(24*3600*1000));