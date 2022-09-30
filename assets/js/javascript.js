const currentDateTime = moment().format('LLL');
const currentDayEl = document.getElementById("currentDay");
const timeRow = document.getElementById("firstRow");
const hora = document.getElementById("hour");
const startTime = 9;
const currentHour = moment().hour();
currentDayEl.innerHTML = currentDateTime;
hora.innerHTML = currentHour;
hora.style.visibility = "hidden";

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
        timeRow.style.backgroundColor = "#F67280";
    }
    if (row1 < currentTime){
        aOne.style.backgroundColor = "#F67280";
    }
    if (row2 < currentTime){
        aTwo.style.backgroundColor = "#F67280";
    }
    if (row3 < currentTime){
        aThree.style.backgroundColor = "#F67280";
    }
    if (row4 < currentTime){
        aFour.style.backgroundColor = "#F67280";
    }
    if (row5 < currentTime){
        aFive.style.backgroundColor = "#F67280";
    }
    if (row6 < currentTime){
        aSix.style.backgroundColor = "#F67280";
    }
    if (row7 < currentTime){
        aSeven.style.backgroundColor = "#F67280";
    }
    if (row8 < currentTime){
        aEight.style.backgroundColor = "#F67280";
    }
    if (row9 < currentTime){
        aNine.style.backgroundColor = "#F67280";
    }
    if (row10 < currentTime){
        aTen.style.backgroundColor = "#F67280";
    }
    if (row11 < currentTime){
        aEleven.style.backgroundColor = "#F67280";
    }
    if (row12 < currentTime){
        aTwelve.style.backgroundColor = "#F67280";
    }
}



statusRow();

