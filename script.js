
class Numpad{
    constructor(currentOperandTextElement){
        this.currentOperandTextElement = currentOperandTextElement
        this.currentOperand = ''
    }
    
    async random(){
        await fetch('https://www.random.org/integers/?num=1&min=1&max=1000&col=1&base=10&format=plain&rnd=new')
            .then(response =>response.json())
            .then(data => this.currentOperand = data)
    }

    appendNumber(number){
        this.currentOperand = this.currentOperand.toString() + number.toString()
    }

    updateDisplay(){
        this.currentOperandTextElement.innerText = this.currentOperand
    }

}

const numberButtons = document.querySelectorAll('[data-number]')
const randomeButton = document.querySelector('[data-random]')
const currentOperandTextElement = document.querySelector('[data-current-operand]')


const numpad = new Numpad(currentOperandTextElement)

numberButtons.forEach(button => {
    button.addEventListener('click', () => {
        numpad.appendNumber(button.innerText)
        numpad.updateDisplay()
    })
})

randomeButton.addEventListener('click', button =>{
    numpad.random()
    numpad.updateDisplay()
})