let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el")
let totalEl = document.getElementById("total-el")
let count = 0
let totalAmount = 0

function increment() {
    count ++
    countEl.textContent = count
}

function save() {
    let countStr = count + " - "
    saveEl.textContent += countStr
    countEl.textContent = 0
    count = 0
}