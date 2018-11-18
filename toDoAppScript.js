
const global = function () {
    class Event {
        constructor(place) {
            this.place = place || document.body
            this.init()
        }

        init() {
            this.render()
        }

        pageElements() {
            const eventText = document.createElement('input')
            const addEventButton = document.createElement('button')
            const ul = document.createElement('ul')
            addEventButton.innerText = 'Add Event'
            addEventButton.addEventListener('click', function () {
                const event = document.createElement('li')
                event.innerText = eventText.value
                ul.appendChild(event)
                console.log('cholera')})

            this.place.appendChild(eventText)
            this.place.appendChild(addEventButton)
            this.place.appendChild(ul)
        }

        myList(){
        }

        render() {
            this.pageElements()
        }

    }
    window.Event = Event
    const event1 = new Event(document.body)
}
global()
