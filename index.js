const getCurrentDate = require('./getDate');
const getCurrentTime = require('./getTime');

const currentDate = getCurrentDate();
const currentTime = getCurrentTime();

console.log(`Поточна дата та час: ${currentDate} ${currentTime}`);
