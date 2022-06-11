//   Grab the save-el paragrah and store it in a variable called saveEl
let saveEl = document.getElementById("save-el")
// count-el in the HTML
let countEl = document.getElementById('count-el') ;
// initialize the count as 0
let count = 0;
 
// listen for clicks on the increment button
function increment() {
  // increment the count variable when the button is clicked (log it out)
  count += 1;
  // change the count-el in the HTML to reflect the new count
  countEl.innerText = count

}


//   Create a function, save(), which logs out the count when it's called
function save() {
    //  Create a variable that contains both the count and the dash separator, i.e. "12 - "
    let countStr= count + " - "
    //  Render the variable in the saveEl using innerText
    saveEl.textContent += countStr 
    // NB: Make sure to not delete the existing content of the paragraph
    count=0
    countEl.innerText = count
}

 