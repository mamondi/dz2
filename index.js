import getCurrentDate from './getDate';
import getCurrentTime from './getTime';

document.addEventListener('DOMContentLoaded', () => {
    const currentDate = getCurrentDate();
    const currentTime = getCurrentTime();
    
    const div = document.createElement('div');
    div.textContent = `Поточна дата та час: ${currentDate} ${currentTime}`;
    document.body.appendChild(div);
});
