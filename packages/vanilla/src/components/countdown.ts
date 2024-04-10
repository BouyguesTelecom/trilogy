export const initCountdowns = () => {

    let countdowns: NodeListOf<HTMLElement> = document.querySelectorAll('[data-countdown]');

    countdowns.forEach((countdown: HTMLElement) => {
        const second = 1000,
            minute = second * 60,
            hour = minute * 60,
            day = hour * 24;

        let countdownElements = countdown;
        let countDown = new Date(countdownElements.dataset.date).getTime();
        let numbersDays: HTMLElement = countdownElements.querySelector('[data-days]');
        let numbersHours: HTMLElement = countdownElements.querySelector('[data-hours]');
        let numbersMinutes: HTMLElement = countdownElements.querySelector('[data-minutes]');
        let numbersSeconds: HTMLElement = countdownElements.querySelector('[data-seconds]');

        let timer = setInterval(() => {

            let now = new Date().getTime();
            let distance = 0;
            if ((countDown - now) > 0) {
                distance = (countDown - now);
            }
            if (distance <= 0) {
                clearInterval(timer);
            }

            numbersDays.innerText = Math.floor(distance / (day)).toString(),
                numbersHours.innerText = Math.floor((distance % (day)) / (hour)).toString(),
                numbersMinutes.innerText = Math.floor((distance % (hour)) / (minute)).toString(),
                numbersSeconds.innerText = Math.floor((distance % (minute)) / second).toString();

        }, second)
        countdownElements.setAttribute(`data-countdown-initialized`, 'true')
    })

};

export default initCountdowns;
