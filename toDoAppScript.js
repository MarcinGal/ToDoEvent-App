
(function () {
    class Event {
        constructor(place) {
            this.place = place || document.body
<<<<<<< HEAD
            this.arr = []
=======
            this.event = event
>>>>>>> master
            this.init()
        }

        init() {
            this.render()
        }

        addEvent(text) {
            this.arr.push(new SingleEvent(text))
            this.render()
        }

        pageElements() {
<<<<<<< HEAD
            const eventText = document.createElement('input')
            const addEventButton = document.createElement('button')
=======

            const eventText = document.createElement('input')
            const addEventButton = document.createElement('button')
            const ul = document.createElement('ul')
            const arr = []

>>>>>>> master
            addEventButton.innerText = 'Add Event'
            addEventButton.style.marginLeft = '10px'

            addEventButton.addEventListener('click', () => {
                this.addEvent(eventText.value)
                console.log(this.arr)
            })

            this.place.appendChild(eventText)
            this.place.appendChild(addEventButton)

        }

        render() {
            this.place.innerHTML = ''
            this.pageElements()


            const ul = document.createElement('ul')

<<<<<<< HEAD
            this.arr.forEach((event, index) => {
                const li = document.createElement('li')
                const deleteButton = document.createElement('button')
                this.isTouched = false
                li.innerText = event.text
                li.addEventListener('click', () => this.eventClick(event))
                // li.LineThroughStyle(event)
                deleteButton.style.margin = '0 0 20px 10px'
                deleteButton.innerText = 'Delete this Event'
=======
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
>>>>>>> master

                deleteButton.addEventListener('click', (e) => this.deleteClickHandler(e, index))

<<<<<<< HEAD
                if (event.isTouched === false) {
                    li.style.textDecoration = "line-through"
                }
=======


                ul.appendChild(event)
                ul.appendChild(deleteButton)
            })
>>>>>>> master

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
            this.render()
        }

        eventClick(element) {
            this.element = element
            if (this.element.isTouched === false) {
                this.element.isTouched = true

            } else {
                this.element.isTouched = false
            }
            this.render()

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