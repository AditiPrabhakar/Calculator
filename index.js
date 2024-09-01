let input = document.getElementById('inputBox');
let buttons = document.querySelectorAll('button'); //selects all the buttons
let string = "";

let arr = Array.from(buttons); //* Will create an array of all of our buttons
arr.forEach(button => {
    button.addEventListener('click', (e) =>{
        if(e.target.innerHTML == '='){
            string = eval(string); //^ Inbuild function in javascript that evalutes the mathematical expression of the string
            input.value = string;
        }
        else if(e.target.innerHTML == 'AC')
        {
            string = "";
            input.value = string;
        }
        else if(e.target.innerHTML == 'DEL')
        {
            string = string.substring(0, string.length-1); //& Removes the last digit
            input.value = string;
        }
        else{
            string += e.target.innerHTML; //! it simply just shows it on the screen (input tab) whenever you click something like 23+31*5/3..
            input.value = string; 
        }
    })
})