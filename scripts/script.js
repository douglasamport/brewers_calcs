



const originalGravity = document.querySelector('#original-gravity');
const finalGravity = document.querySelector('#final-gravity');
const resetButton = document.querySelector('#reset');
const aaDisplay = document.querySelector('#appt-atten');
const ogDisplay = document.querySelector('#og-display');
const fgDisplay = document.querySelector('#fg-display');
const abvDisplay = document.querySelector('#abv');

document.addEventListener("focusout", updateValues);
document.addEventListener("focusout", updateValues)
resetButton.addEventListener("click", origText)

function origText() {
    console.log('stupid button')
    console.log(originalGravity.value);
    ogDisplay.innerText = "1.050";
    console.log(finalGravity.value);
    fgDisplay.innerText = "1.010";
    aaDisplay.innerText = "80%"
    abvDisplay.innerText = "5.25%"
}

function updateValues() {
    console.log(originalGravity.value);
    ogDisplay.innerText = displayOG(originalGravity.value);
    console.log(finalGravity.value);
    fgDisplay.innerText = displayFG(finalGravity.value);
    aaDisplay.innerText = calculateAttenuation(originalGravity.value, finalGravity.value)
    abvDisplay.innerText = calculateAbv(originalGravity.value, finalGravity.value);
}

function calculateAbv(og, fg) {
    let con = 13125
    let result = (((og*1000) - (fg*1000))*con)/1000
    result = Math.round(result)/100
    if (og === '' || fg === '') {return 'N/A'}
   else {
       result = result + '%';
       return result
    }
}
function calculateAttenuation(og, fg) {
   let cog = Math.round((og*1000)-1000)
   let cfg = Math.round((fg*1000)-1000)
   result = (cog - cfg)/cog
   if (og === '' || fg === "") {return 'N/A'}
   else {
       result *= 100
       return result.toFixed(2).concat('%')
   }

}
function displayOG(str) {
    if (str === "") {
        return 'N/A';
    }
    else {
        return str;
    }
}
function displayFG(str) {
    if (str === "") {
        return 'N/A';
    }
    else {
        return str;
    }
}