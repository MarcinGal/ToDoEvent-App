
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
            addEventButton.innerText = 'Add Event'

            this.place.appendChild(eventText)
            this.place.appendChild(addEventButton)
        }

        myList(){
            const ul = document.createElement('ul')
            this.place.appendChild(ul)
            this.place.innerHTML = ''
            // this.place.addEventButton.addEventListener('click', () => {console.log('cholera')})
        }

        render() {
            this.pageElements()
            this.myList()
        }

    }
    window.Event = Event
    const event1 = new Event(document.body)
}
global()
