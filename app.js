//inbuit function approach

const previousDisplay = document.querySelector(".previous-display")
const currentDisplay = document.querySelector(".current-display")
const buttons = Array.from(document.querySelectorAll('button'))
const historyBtn = document.querySelector("#history")
const history = document.querySelector(".history")
const arrOfHistory = []

let delBtn = document.getElementById('deleteItem').addEventListener('click', (e)=>{
    if (previousDisplay.innerHTML) {
        previousDisplay.innerHTML =  previousDisplay.innerText.slice(0, -1)
    }
    else if (currentDisplay.innerHTML){
        currentDisplay.innerHTML = currentDisplay.innerText.slice(0, -99)
    }
})


buttons.forEach(btns =>{
    btns.addEventListener("click", (e)=>{
        switch (e.target.innerText.toString()) {
            case 'AC':
                previousDisplay.innerHTML = ''
                currentDisplay.innerHTML = ''
                break;
            case "=" :
                try {
                    if (previousDisplay.innerHTML) {
                        previousDisplay.innerHTML = eval(previousDisplay.innerText)
                        currentDisplay.innerHTML = previousDisplay.innerHTML
                        arrOfHistory.push(`${previousDisplay}${currentDisplay}`)  
                        previousDisplay.innerText = ""
                        console.log();
                    }
                } catch (error) {
                    currentDisplay.innerText = "Syntax error"
                    previousDisplay.innerHTML = ''
                    console.log(error);
                }
                break;
            case '.':
                if (previousDisplay.innerHTML.indexOf(".") !== -1) {
                    return;
            
                }
            default:
               
                if(e.target.innerHTML == "÷" ){
                    previousDisplay.innerHTML += "/"
                    return;
                }

                if(e.target.innerHTML == "x" ){
                    previousDisplay.innerHTML += "*"
                    return;
                }

                if(currentDisplay.innerHTML == "Syntax error") currentDisplay.innerHTML = ""
                    
                if(currentDisplay.innerText){
                    previousDisplay.innerText = currentDisplay.innerHTML
                    previousDisplay.innerHTML += e.target.innerText
                    currentDisplay.innerText = ""
                }
                

                previousDisplay.innerHTML += e.target.innerText
                break;
        }
    })
})

historyBtn.addEventListener('click', (e)=>{
    history.style.display = 'block'
    // historyBtn.innerHTML = `<i class="fa-regular fa-circle-arrow-left"></i>`
})


