//inbuit function approach

//window onload display 
// window.onload = () =>{
//     getFromLOcalstorage();
//     if (localStorage.getItem('tasks') === null) {
//         return;
//     } else {
//         displayHistory();
//     }
// }

//Global variables
const previousDisplay = document.querySelector(".previous-display")
const currentDisplay = document.querySelector(".current-display")
const buttons = Array.from(document.querySelectorAll('button'))
const historyBtn = document.querySelector(".style")
const history = document.querySelector(".history")
const historyUl = document.getElementById("history-ul")
let arrOfHistory = []

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
        switch (e.target.innerText.toString()){
            case 'AC':
                previousDisplay.innerHTML = ''
                currentDisplay.innerHTML = ''
                break;
            case "=" :
                try {
                    if (previousDisplay.innerHTML) {
                        
                        let historyData = {
                            prevDisplay : previousDisplay.innerHTML,
                            currentDisplay : "="
                        }

                        previousDisplay.innerHTML = eval(previousDisplay.innerText) 
                        currentDisplay.innerHTML = previousDisplay.innerHTML

                        historyData["currentDisplay"] += " " + currentDisplay.innerHTML

                        setLocalstorage(historyData);
                  
                        previousDisplay.innerText = ""
                      
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
                    currentDisplay.innerText = ""
                }
            
                previousDisplay.innerHTML += e.target.innerText
                break;
        }
    })
})

historyBtn.addEventListener('click', (e)=>{
    history.style.display = 'block'
    displayHistory();
    historyBtn.classList.remove("style")
    historyBtn.classList.add()
})

let delHistory = document.querySelector('.fa-trash-can')
delHistory.addEventListener("click", (e)=>{
    localStorage.removeItem("history")
    historyUl.innerHTML = ''
    // displayHistory();
    history.style.display = 'none'
})

function getFromLOcalstorage(){
    if(localStorage.getItem("history") === null){
        arrOfHistory = []
    }else{
        arrOfHistory =JSON.parse(localStorage.getItem("history", arrOfHistory))
    }
}

function setLocalstorage (data){
    getFromLOcalstorage();
    arrOfHistory.push(data)
    localStorage.setItem("history", JSON.stringify(arrOfHistory))
}

function displayHistory(){
getFromLOcalstorage();
    if (localStorage.getItem('history')) {
        document.getElementById("no-history").style.display = "none"
        arrOfHistory.forEach(list=>{
            let his = document.createElement('li')
           his.innerHTML= `${list.prevDisplay}${list.currentDisplay}`
           historyUl.appendChild(his)
        })
    }
}




    
