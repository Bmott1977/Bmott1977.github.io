//Gets hours of the day
const hours = new Date().getHours() // get the current hour

const isMorning = hours >= 4 && hours < 12 // is it morning?
const isAfternoon = hours >= 12 && hours < 17 // is it afternoon?
const isEvening = hours >= 17 || hours < 4 // is it evening?

//Changes message based on time of day
if ( isMorning === true) {
    document.querySelector('#Welcome p').textContent = "Welcome to my Hompage, it's currently the morning."

} else if (isAfternoon === true) {
    document.querySelector('#Welcome p').textContent = "Welcome to my Hompage, it's currently the afternoon."

} else if (isEvening === true) {
    document.querySelector('#Welcome p').textContent = "Welcome to my Hompage, it's currently the evening."

}

localStorage.setItem('Its a secret to everybody.', '100 Rupees')