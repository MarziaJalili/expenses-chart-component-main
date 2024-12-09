import dayjs from 'https://unpkg.com/dayjs@1.11.10/esm/index.js';

const today = dayjs().format("dddd");

const weekDays = ["Monday", "Tuesday", "Wednesday", "Thurday", "Friday", "Saturday", "Sunday"];

const liElements = document.querySelectorAll("li");

weekDays.forEach((day, index) => {
    if (day === today) {
        liElements[index].classList.add("today");
    }
});






