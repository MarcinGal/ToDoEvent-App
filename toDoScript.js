console.log('lubie placki')

// document.querySelector('.event-add').addEventListener('click', () => {
//     document.createElement
//     document.querySelector('.event-list').innerHTML = `<li>test dodany</li>`
//     console.log('lubie 2placki')
// })

// const myArray = []


var Event = function () {
    this.eventContent = document.querySelector('.event-input').value;
    document.querySelector('.event-list').innerHTML = `<li>${this.eventContent}</li>`
}

document.querySelector('.event-add').addEventListener('click', () => {
new Event;
})

// document.querySelector('.event-add').addEventListener('click', () => {
//     document.createElement()
//     document.querySelector('.event-list').innerHTML = `<li>test dodany</li>`
//     console.log('kreatorem go')
// })