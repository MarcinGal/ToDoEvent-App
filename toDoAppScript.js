
const global = function () {
    class Event {
        constructor(place, arr) {
            this.place = place || document.body
            this.event = event
            this.init()
        }

        init() {
            this.render()
        }

        pageElements() {

            const eventText = document.createElement('input')
            const addEventButton = document.createElement('button')
            const ul = document.createElement('ul')
            const arr = []

            addEventButton.innerText = 'Add Event'

            addEventButton.addEventListener('click', function () {
                event = document.createElement('li')
                const label = document.createElement('p')
                const deleteButton = document.createElement('button')
                event.appendChild(label)
                event.appendChild(deleteButton)




                this.arr = arr.push(eventText.value)
                label.innerText = arr[arr.length - 1]
                console.log('test')
                console.log(arr)

                event.style.width = 0;
                deleteButton.style.marginBottom = '20px'
                deleteButton.innerText = 'Delete this Event'
                deleteButton.addEventListener('click', () => {
                    console.log(deleteButton.innerText)
                })




                ul.appendChild(event)
                ul.appendChild(deleteButton)
            })

            this.place.appendChild(eventText)
            this.place.appendChild(addEventButton)
            this.place.appendChild(ul)



        }


        eventClick() {
            this.event.addEventListener('click', () => console.log('tekst dotkniety'))
        }

        myList() {
        }

        render() {
            this.pageElements()
        }

    }
    window.Event = Event
    const event1 = new Event(document.body)
}
global()
