const inputEl = document.querySelector('input')
const buttonEl = document.querySelector('button')
const timerEl = document.querySelector('span')

const createTimerAnimator = () => {
    return (seconds) => {
        const setTime = seconds * 1000
        const startingTime = Date.now()
        const afterStartTime = startingTime + setTime
        let timerCycle = setInterval(() => {
            const currentTime = Date.now()
            const remainingTime = afterStartTime - currentTime

            const hours = Math.floor((remainingTime / (1000 * 60 * 60)) % 24).toLocaleString('ru-RU', {minimumIntegerDigits: 2, useGrouping: false})
            const minutes = Math.floor((remainingTime / (1000 * 60)) % 60).toLocaleString('ru-RU', {minimumIntegerDigits: 2, useGrouping: false})
            const seconds = Math.floor((remainingTime / 1000) % 60).toLocaleString('ru-RU', {minimumIntegerDigits: 2, useGrouping: false})

            if((remainingTime / 1000) < 1) {
                clearInterval(timerCycle)
            }

            timerEl.innerHTML = `
			<div>${hours}</div>
			<div>:</div>
			<div>${minutes}</div>
			<div>:</div>
			<div>${seconds}</div>
			`
        })

    }
}
const animateTimer = createTimerAnimator()

inputEl.addEventListener('input', () => inputEl.setAttribute('type','number'))

buttonEl.addEventListener('click', () => {
    const seconds = Number(inputEl.value)
    animateTimer(seconds)
    inputEl.value = ''
})