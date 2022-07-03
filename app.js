//inbuit function approach

const previousDisplay = document.querySelector(".previous-display")
const currentDisplay = document.querySelector(".current-display")
const buttons = Array.from(document.querySelectorAll('button'))
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
        switch (e.target.innerText) {
            case 'AC':
                previousDisplay.innerHTML = ''
                currentDisplay.innerHTML = ''
                break;
            case "=" :
                try {
                    previousDisplay.innerHTML = eval(previousDisplay.innerText)
                    currentDisplay.innerHTML = previousDisplay.innerHTML
                    previousDisplay.innerText = ""
                } catch (error) {
                    currentDisplay.innerText = "Syntax error"
                    previousDisplay.innerHTML = ''
                }
                break;
            default:
               
                if(e.target.innerHTML == "÷" ){
                    previousDisplay.innerHTML += "/"
                    return;
                }

                if(e.target.innerHTML == "x" ){
                    previousDisplay.innerHTML += "*"
                    return;
                }

                // if(previousDisplay.innerHTML.indexOf(".") !== -1) return
                // if(previousDisplay.innerHTML.indexOf("+") !== -1) return
                // if(previousDisplay.innerHTML.indexOf("-") !== -1) return
                // if(previousDisplay.innerHTML.indexOf("/") !== -1) console.log("x");
                // if(previousDisplay.innerHTML.indexOf("x") !== -1) return

                if(currentDisplay.innerHTML == "Syntax error") currentDisplay.innerHTML = ""
                    
                if(currentDisplay.innerText){
                    previousDisplay.innerText = currentDisplay.innerHTML
                    previousDisplay.innerHTML += e.target.innerText
                    currentDisplay.innerText = ""
                }
                previousDisplay.innerHTML += e.target.innerText

                if(previousDisplay.innerHTML.indexOf("+") !== -1){
                    return
                }
                break;
        }
    })
})


