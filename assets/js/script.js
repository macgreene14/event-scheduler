var dateTimeEl = document.getElementById("currentDay")
var containerEl = document.getElementById("mainContainer")
var input9El = document.getElementById("input9")
var input10El = document.getElementById("input10")
var input11El = document.getElementById("input11")
var input12El = document.getElementById("input12")
var input1El = document.getElementById("input1")
var input2El = document.getElementById("input2")
var input3El = document.getElementById("input3")
var input4El = document.getElementById("input4")
var input5El = document.getElementById("input5")

// var saveBtn1El = document.getElementById("saveBtn2")
// var input1El = document.getElementById("input2")

// update header with datetime
function header () {
    var today = moment();
    dateTimeEl.textContent= today
}

// run header function every 1 second
setInterval(header, 1000)

function refreshState() {
    var scheduleStr = localStorage.getItem("schedule")

    if (scheduleStr) {
        var scheduleObject = JSON.parse(scheduleStr)
    }

    if (input9El) {input9El.value = scheduleObject["9"]}
    if (input10El) {input10El.value = scheduleObject["10"]}
    if (input11El) {input11El.value = scheduleObject["11"]}
    if (input12El) {input12El.value = scheduleObject["12"]}
    if (input1El) { input1El.value = scheduleObject["1"]}
    if (input2El) {input2El.value = scheduleObject["2"]}
    if (input3El) {input3El.value = scheduleObject["3"]}
    if (input4El) {input4El.value = scheduleObject["4"]}
    if (input5El) {input5El.value = scheduleObject["5"]}


}

containerEl.addEventListener("click", function(event) {
    event.preventDefault
    var element = event.target
    if (element.matches("button")) {
        var hour = element.id
        var inputName = "input" + hour //construct input id
        var inputEl = document.getElementById(inputName) //grab input element
        var inputText = inputEl.value //grab text value from saved input
        var scheduleStr = localStorage.getItem("schedule")
        var scheduleObject = JSON.parse(scheduleStr)
        scheduleObject[hour] = inputText
        localStorage.setItem("schedule", JSON.stringify(scheduleObject))        
    }
})

refreshState()
