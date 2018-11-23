
(function () {
    class Event {
        constructor(place) {
            this.place = place || document.body
            this.arr = JSON.parse(localStorage.getItem('addedEvents')) || []
            this.init()
        }

        init() {
            this.render()
        }

        addEvent(text, arr) {
            this.arr.push(new SingleEvent(text))
            this.render(arr)
        }

        pageElements() {
            const eventText = document.createElement('input')
            const addEventButton = document.createElement('button')
            const filterText = document.createElement('input')
            const filterButton = document.createElement('button')
            const allEventsButton = document.createElement('button')
            const completedEEventsButton = document.createElement('button')
            const uncompletedEventsButton = document.createElement('button')

            addEventButton.innerText = 'Add Event'
            addEventButton.style.marginLeft = '10px'
            filterText.style.marginLeft = '80px'
            filterButton.innerText = 'Search'
            filterButton.style.marginLeft = '10px'
            allEventsButton.innerText = 'All events'
            completedEEventsButton.innerText = 'Completed Events'
            uncompletedEventsButton.innerText = 'Uncompleted Events'
            allEventsButton.style.marginLeft = '40px'

            addEventButton.addEventListener('click', () => {
                this.addEvent(eventText.value)
                this.addEventToLocalStorage()
            })

            filterButton.addEventListener('click', () => {
                this.filterFunction(filterText)
            })

            allEventsButton.addEventListener('click', () => {
                this.render(this.arr)
            })

            completedEEventsButton.addEventListener('click', () => {
                const completedEventsArr = this.arr.filter((element) => element.isTouched === false)
                this.render(completedEventsArr)
            })

            uncompletedEventsButton.addEventListener('click', () => {
                const uncompletedEventsArr = this.arr.filter((element) => element.isTouched !== false)
                this.render(uncompletedEventsArr)
            })

            this.place.appendChild(eventText)
            this.place.appendChild(addEventButton)
            this.place.appendChild(filterText)
            this.place.appendChild(filterButton)
            this.place.appendChild(allEventsButton)
            this.place.appendChild(completedEEventsButton)
            this.place.appendChild(uncompletedEventsButton)
        }

        render(arr) {
            this.place.innerHTML = ''
            this.pageElements()
            const array = arr || this.arr

            const ul = document.createElement('ul')
            array.forEach((event, index) => {
                const li = document.createElement('li')
                const deleteButton = document.createElement('button')
                this.isTouched = false
                li.innerText = event.text
                li.addEventListener('click', () => this.eventClick(event))

                deleteButton.style.margin = '0 0 20px 10px'
                deleteButton.innerText = 'Delete this Event'


                if (event.isTouched === false) {
                    li.style.textDecoration = "line-through"
                }

                deleteButton.addEventListener('click', (e) => {
                    this.deleteClickHandler(e, index)
                    this.addEventToLocalStorage()
                })

                li.appendChild(deleteButton)
                ul.appendChild(li)
            })
            this.place.appendChild(ul)
        }


        eventClick() {
            this.event.addEventListener('click', () => console.log('tekst dotkniety'))
        }

        deleteClickHandler(element, index) {
            this.arr = this.arr.slice(0, index).concat(this.arr.slice(index + 1))
            this.render(this.arr)
        }

        eventClick(element) {
            this.element = element
            if (this.element.isTouched === false) {
                this.element.isTouched = true

            } else {
                this.element.isTouched = false
            }
            this.render(this.arr)
        }

        addEventToLocalStorage() {
            localStorage.setItem('addedEvents', `${JSON.stringify(this.arr)}`)
        }

        removeEventfromLocalStorage(index) {
            localStorage.removeItem(`${JSON.parse(this.arr)[index]}`)
        }

        filterFunction(input) {
            const filteredArr = this.arr.filter((element) => element.text.toLowerCase().replace(/\s/g, '') === input.value.toLowerCase().replace(/\s/g, ''))
            console.log(filteredArr)
            this.render(filteredArr)
        }
    }


    class SingleEvent {
        constructor(text) {
            this.text = text
        }
    }

    window.Event = Event
})()

const event1 = new Event(document.body)