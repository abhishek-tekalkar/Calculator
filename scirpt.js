//needs = empty str, select query of button, in loop of buttons on each button perform action
let inputstr = "";
let buttons = document.querySelectorAll('.button');
Array.from(buttons).forEach((button)=>{
    button.addEventListener("click" , (e) => {
        const val = e.target.innerHTML;
        if (val == '=') {
            inputstr = eval(inputstr);
            document.querySelector('input').value = inputstr;
        }
        else if(val == 'C'){
            inputstr = ""
            document.querySelector('input').value = inputstr;
        }
        else if(val == '+' || val == '-' || val == '%' || val == '/' || val == '.'){
            inputstr += val;    
            document.querySelector('input').value = inputstr;
        }
        else if(val == 'DEL'){
            inputstr = inputstr.substring(0, inputstr.length-1);
            document.querySelector('input').value = inputstr;
        }
        else{
            inputstr = inputstr + val;
            document.querySelector('input').value = inputstr;
        }
    })
})