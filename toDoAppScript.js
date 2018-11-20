
(function () {
    class Event {
        constructor(place) {
            this.place = place || document.body
            this.arr = []
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
            const eventText = document.createElement('input')
            const addEventButton = document.createElement('button')
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

            this.arr.forEach((event, index) => {
                const li = document.createElement('li')
                const deleteButton = document.createElement('button')
                this.isTouched = false
                li.innerText = event.text
                li.addEventListener('click', this.eventClick(event))
                deleteButton.style.margin = '0 0 20px 10px'
                deleteButton.innerText = 'Delete this Event'

                deleteButton.addEventListener('click', (e) => this.deleteClickHandler(e, index))

                li.appendChild(deleteButton)
                ul.appendChild(li)
            })
            this.place.appendChild(ul)
        }

        deleteClickHandler(element, index) {
            this.arr = this.arr.slice(0, index).concat(this.arr.slice(index + 1))
            this.render()
        }

        eventClick(element) {
            this.element = element
            if (this.element.isTouched === false){
                this.element.isTouched = true
                console.log('1')
                // this.element.style.textDecoration = 'line-through'
            }else {
                this.element.isTouched = false
                console.log('2')
                // this.element.style.textDecoration = 'none'
            }
            
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