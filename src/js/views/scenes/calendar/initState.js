/*
 * state
 */


const today = new Date();

export default {
    currentDate: today,
    currentYear: today.getFullYear(),
    currentMonthIndex: today.getMonth()
}