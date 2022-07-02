//inbuit function approach

const previousDisplay = document.querySelector(".previous-display")
const currentDisplay = document.querySelector(".current-display")
const buttons = Array.from(document.querySelectorAll('button'))

buttons.forEach(btns =>{
    btns.addEventListener("click", (e)=>{
        switch (e.target.innerText) {
            case 'AC':
                previousDisplay.innerHTML = ''
                currentDisplay.innerHTML = ''
                break;
            default:
                currentDisplay.innerHTML += e.target.innerText
                break;
        }
    })
})