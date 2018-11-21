
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
                this.addEventToLocalStorage()              
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

       addEventToLocalStorage() {
            localStorage.setItem('addedEvents', `${JSON.stringify(this.arr)}`)
        }
    
        removeEventfromLocalStorage(index) {
            localStorage.removeItem(`${JSON.parse(this.arr)[index]}`)
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