const currentDateTime = moment().format('LLL');
const currentDayEl = document.getElementById("currentDay");
const timeRow = document.getElementById("firstRow");
const hora = document.getElementById("hour");
const startTime = 9;
const currentHour = moment().hour();
currentDayEl.innerHTML = currentDateTime;
hora.innerHTML = currentHour;
hora.style.visibility = "visible";

const initRow = timeRow.innerHTML = moment(startTime, "h").format("HH");

function nextRow(name) {
    let rowEl = document.createElement("button");
    rowEl.classList.add("row");
    rowEl.textContent = name;
    return rowEl;
}



const newRow = document.querySelector("#appendRow");

newRow.appendChild(nextRow(moment("10", "h").format("HH"))).setAttribute("id", "append one");
newRow.appendChild(nextRow(moment("11", "h").format("HH"))).setAttribute("id", "append two");
newRow.appendChild(nextRow(moment("12", "h").format("HH"))).setAttribute("id", "append three");
newRow.appendChild(nextRow(moment("13", "h").format("HH"))).setAttribute("id", "append four");
newRow.appendChild(nextRow(moment("14", "h").format("HH"))).setAttribute("id", "append five");
newRow.appendChild(nextRow(moment("15", "h").format("HH"))).setAttribute("id", "append six");
newRow.appendChild(nextRow(moment("16", "h").format("HH"))).setAttribute("id", "append seven");
newRow.appendChild(nextRow(moment("17", "h").format("HH"))).setAttribute("id", "append eight");
newRow.appendChild(nextRow(moment("18", "h").format("HH"))).setAttribute("id", "append nine");
newRow.appendChild(nextRow(moment("19", "h").format("HH"))).setAttribute("id", "append ten");
newRow.appendChild(nextRow(moment("20", "h").format("HH"))).setAttribute("id", "append eleven");
newRow.appendChild(nextRow(moment("21", "h").format("HH"))).setAttribute("id", "append twelve");

const timeTime = moment().format("HH");
const currentTimeSelector = document.getElementById("hour");
const currentTime = Number(currentTimeSelector.innerHTML); 
const aOne = document.getElementById("append one");
const aTwo = document.getElementById("append two");
const aThree = document.getElementById("append three");
const aFour = document.getElementById("append four");
const aFive = document.getElementById("append five");
const aSix = document.getElementById("append six");
const aSeven = document.getElementById("append seven");
const aEight = document.getElementById("append eight");
const aNine = document.getElementById("append nine");
const aTen = document.getElementById("append ten");
const aEleven = document.getElementById("append eleven");
const aTwelve = document.getElementById("append twelve");

const row0 = Number(timeRow.innerHTML);
const  row1 = Number(aOne.innerHTML);
const  row2 = Number(aTwo.innerHTML);
const  row3 = Number(aThree.innerHTML);
const  row4 = Number(aFour.innerHTML);
const  row5 = Number(aFive.innerHTML);
const  row6 = Number(aSix.innerHTML);
const  row7 = Number(aSeven.innerHTML);
const  row8 = Number(aEight.innerHTML);
const  row9 = Number(aNine.innerHTML);
const  row10 = Number(aTen.innerHTML);
const  row11 = Number(aEleven.innerHTML);
const  row12 = Number(aTwelve.innerHTML);

const allRow = [row1, row2, row3, row4, row5, row6, row7, row8, row9, row10, row11, row12];


const rows = document.getElementById("append");

function statusRow() {
    if (row0 < currentTime){
        timeRow.innerHTML += "<p>:00AM</p>"
        timeRow.style.backgroundColor = "#F67280";
    }
    if (row1 < currentTime){
        aOne.innerHTML += "<p>:00AM</p>"
        aOne.style.backgroundColor = "#F67280";
    }
    if (row2 < currentTime){
        aTwo.innerHTML += "<p>:00AM</p>"
        aTwo.style.backgroundColor = "#F67280";
    }
    if (row3 < currentTime){
        aThree.innerHTML += "<p>:00AM</p>"
        aThree.style.backgroundColor = "#F67280";
    }
    if (row4 < currentTime){
        aFour.innerHTML = "<p>1:00PM</p>"
        aFour.style.backgroundColor = "#F67280";
    }
    if (row5 < currentTime){
        aFive.innerHTML = "<p>2:00PM</p>"
        aFive.style.backgroundColor = "#F67280";
    }
    if (row6 < currentTime){
        aSix.innerHTML = "<p>3:00PM</p>"
        aSix.style.backgroundColor = "#F67280";
    }
    if (row7 < currentTime){
        aSeven.innerHTML = "<p>4:00PM</p>"
        aSeven.style.backgroundColor = "#F67280";
    }
    if (row8 < currentTime){
        aEight.innerHTML = "<p>5:00PM</p>"
        aEight.style.backgroundColor = "#F67280";
    }
    if (row9 < currentTime){
        aNine.innerHTML = "<p>6:00PM</p>"
        aNine.style.backgroundColor = "#F67280";
    }
    if (row10 < currentTime){
        aTen.innerHTML = "<p>7:00PM</p>"
        aTen.style.backgroundColor = "#F67280";
    }
    if (row11 < currentTime){
        aEleven.innerHTML = "<p>8:00PM</p>"
        aEleven.style.backgroundColor = "#F67280";
    }
    if (row12 < currentTime){
        aTwelve.innerHTML = "<p>9:00PM</p>"
        aTwelve.style.backgroundColor = "#F67280";
    }
}

statusRow();

var modal = document.getElementById("myModal");
const addAgenda = document.getElementById("addAgenda");
const spanner = document.getElementById("spanner");
const removeBtn = document.getElementById("removeAgenda");

timeRow.addEventListener("click", () => {
    modal.style.display = "block";
    addAgenda.addEventListener("click", agendaRow0);
    function agendaRow0() {
        let input = document.getElementById("userinput").value;
        modal.style.display = "none";
        timeRow.innerText = input;
        }
        return;
});
removeBtn.addEventListener("click", () => {
    timeRow.innerHTML = row0;
})


aOne.addEventListener("click", () => {
    modal.style.display = "block";
    addAgenda.addEventListener("click", agendaRow1);
    function agendaRow1() {
        let input = document.getElementById("userinput").value;
        modal.style.display = "none";
        aOne.innerText = input;
        localStorage.setItem("input", input);
        var localMem1 = JSON.stringify(input);
        console.log(localMem1);
        }
        return;
});

removeBtn.addEventListener("click", () => {
    aOne.innerHTML = row1;
})

aTwo.addEventListener("click", () => {
    modal.style.display = "block";
    addAgenda.addEventListener("click", agendaRow2);
    function agendaRow2() {
        let input = document.getElementById("userinput").value;
        modal.style.display = "none";
        aTwo.innerText = input2;
        localStorage.setItem("input2", input);
        var localMem2 = JSON.stringify(input);
        console.log(localMem2);
        }
        return;
});
removeBtn.addEventListener("click", () => {
    aTwo.innerHTML = row2;
})

aThree.addEventListener("click", () => {
    modal.style.display = "block";
    addAgenda.addEventListener("click", agendaRow3);
    function agendaRow3() {
        let input = document.getElementById("userinput").value;
        modal.style.display = "none";
        aThree.innerText = input;
        localStorage.setItem("input3", input);
        var localMem3 = JSON.stringify(input);
        console.log(localMem3);
        }
        return;
});
removeBtn.addEventListener("click", () => {
    aThree.innerHTML = row3;
})
aFour.addEventListener("click", () => {
    modal.style.display = "block";
    addAgenda.addEventListener("click", agendaRow4);
    function agendaRow4() {
        let input = document.getElementById("userinput").value;
        modal.style.display = "none";
        aTwo.innerText = input;
        localStorage.setItem("input", input);
        var localMem4 = JSON.stringify(input);
        console.log(localMem4);
        }
        return;
});
removeBtn.addEventListener("click", () => {
    aFour.innerHTML = row4;
})
aFive.addEventListener("click", () => {
    modal.style.display = "block";
    addAgenda.addEventListener("click", agendaRow5);
    function agendaRow5() {
        let input = document.getElementById("userinput").value;
        modal.style.display = "none";
        aFive.innerText = input;
        localStorage.setItem("input5", input);
        var localMem5 = JSON.stringify(input);
        console.log(localMem5);
        }
        return;
});
removeBtn.addEventListener("click", () => {
    aTwo.innerHTML = row5;
})
aSix.addEventListener("click", () => {
    modal.style.display = "block";
    addAgenda.addEventListener("click", agendaRow6);
    function agendaRow6() {
        let input = document.getElementById("userinput").value;
        modal.style.display = "none";
        aSix.innerText = input;
        }
        return;
});
removeBtn.addEventListener("click", () => {
    aSix.innerHTML = row6;
})
aSeven.addEventListener("click", () => {
    modal.style.display = "block";
    addAgenda.addEventListener("click", agendaRow7);
    function agendaRow7() {
        let input = document.getElementById("userinput").value;
        modal.style.display = "none";
        aSeven.innerText = input;
        }
        return;
});
removeBtn.addEventListener("click", () => {
    aSeven.innerHTML = row7;
})
aEight.addEventListener("click", () => {
    modal.style.display = "block";
    addAgenda.addEventListener("click", agendaRow8);
    function agendaRow8() {
        let input = document.getElementById("userinput").value;
        modal.style.display = "none";
        aEight.innerText = input;
        }
        return;
});
removeBtn.addEventListener("click", () => {
    aEight.innerHTML = row8;
})
aNine.addEventListener("click", () => {
    modal.style.display = "block";
    addAgenda.addEventListener("click", agendaRow9);
    function agendaRow9() {
        let input = document.getElementById("userinput").value;
        modal.style.display = "none";
        aSeven.innerText = input;
        }
        return;
});
removeBtn.addEventListener("click", () => {
    aNine.innerHTML = row9;
})
aTen.addEventListener("click", () => {
    modal.style.display = "block";
    addAgenda.addEventListener("click", agendaRow10);
    function agendaRow10() {
        let input = document.getElementById("userinput").value;
        modal.style.display = "none";
        aTen.innerText = input;
        }
        return;
});
removeBtn.addEventListener("click", () => {
    aTen.innerHTML = row10;
})
aEleven.addEventListener("click", () => {
    modal.style.display = "block";
    addAgenda.addEventListener("click", agendaRow11);
    function agendaRow11() {
        let input = document.getElementById("userinput").value;
        modal.style.display = "none";
        aEleven.innerText = input;
        }
        return;
});
removeBtn.addEventListener("click", () => {
    aEleven.innerHTML = row11;
})
aTwelve.addEventListener("click", () => {
    modal.style.display = "block";
    addAgenda.addEventListener("click", agendaRow12);
    function agendaRow12() {
        let input = document.getElementById("userinput").value;
        modal.style.display = "none";
        aTwelve.innerText = input;
        }
        return;
});
removeBtn.addEventListener("click", () => {
    aTwelve.innerHTML = row12;
})



spanner.addEventListener("click", () => {
    modal.style.display = "none";
});


addAgenda.addEventListener("click", agendaRow2);

