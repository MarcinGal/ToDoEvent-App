
const global = function () {
    class Event {
        constructor(place) {
            this.place = place || document.body
            this.init()
            this.arr = []

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

                this.arr.push(eventText.value)


                event.style.width = 0;
                deleteButton.style.marginBottom = '20px'
                deleteButton.innerText = 'Delete this Event'
                deleteButton.addEventListener('click', (e) => this.deleteClickHandler(e, index)
                )

                ul.appendChild(event)
                ul.appendChild(deleteButton)
            })

            this.place.appendChild(eventText)
            this.place.appendChild(addEventButton)
            this.place.appendChild(ul)
        }



        render() {
            this.location.innerHTML = ''
            const ul = document.createElement('ul')

            this.pageElements()

            this.arr.forEach((task, index) => {
                const li = document.createElement('li')
                const deleteButton = document.createElement('button')

                li.innerText = task.text
                deleteButton.innerText = 'delete this event'

                deleteButton.addEventListener('click', (e) => this.deleteClickHandler(e, index))

                this.taskIsCompletedStyle(task, li)

                li.appendChild(button)
                ul.appendChild(li)
            })

            this.location.appendChild(ul)
        }

        deleteClickHandler(e, index) {
            e.stopPropagation()
            this.tasks = this.tasks.slice(0, index).concat(this.tasks.slice(index + 1))
            this.render()
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
