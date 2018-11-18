
function ClickableButton(label, onClickHandler) {
    this.label = label
    this.onClickHandler = onClickHandler

    this.render()
}

ClickableButton.prototype.render = function () {
    const button = document.createElement('button')
    button.innerText = this.label
    button.addEventListener('click', this.onClickHandler)
    document.body.appendChild(button)

}

const randomNumber = function () {
    console.log(Math.random())
}

const lista = function () {
    const ul = document.createElement('ul')
    const li = document.createElement('li')
    const text = document.createTextNode('lubie placki')
    document.body.appendChild(ul).appendChild(li).appendChild(text)
}

const a = new ClickableButton('wygeneruj liczbe', randomNumber)

const b = new ClickableButton('lista', lista)


