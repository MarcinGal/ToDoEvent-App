
const global = function () {
    class Event {
        constructor(place, arr) {
            this.place = place || document.body
            this.init()
            this.deleteButton = deleteButton
            
        }

        init() {
            this.render()
        }

        pageElements() {
           
            const eventText = document.createElement('input')
            const addEventButton = document.createElement('button')
            const ul = document.createElement('ul')
            const arr = []
            let deleteButtonClass = 0
            addEventButton.innerText = 'Add Event'

            addEventButton.addEventListener('click', function () {
                
                const event = document.createElement('li')
                const deleteButton = document.createElement('button')
                deleteButton.classList.add(deleteButtonClass)
                this.arr = arr.push(eventText.value)
                event.innerText = arr[arr.length-1]
                console.log('test')
                console.log(arr)
                deleteButtonClass++
                
                
                event.style.width = 0;
                deleteButton.style.marginBottom = '20px'
                deleteButton.innerText = 'Delete this Event'
                deleteButton.addEventListener('click', function () {
                    console.log(deleteButtonClass)
                })


               
                ul.appendChild(event)
                ul.appendChild(deleteButton)
            })

            this.place.appendChild(eventText)
            this.place.appendChild(addEventButton)
            this.place.appendChild(ul)
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
