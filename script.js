let a = ''; //first number and result
let b = ''; //second number
let sign = ''; // operation sign
let finish = false;


const numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '.'];
const action = ['-', '+', 'X', '/'];


// screen
const out = document.querySelector('.calc-screen p');


function claearAll() {
    a = ''; //first number and result
    b = ''; //second number
    sign = ''; // sign
    finish = false;
    out.textContent = 0;
}

document.querySelector('.ac').onclick = claearAll;


document.querySelector('.buttons').onclick = (event) => {
    //no button pressed
    if(!event.target.classList.contains('btn')) return;
    //button pressed claerAll ac
    if(event.target.classList.contains('ac')) return

    out.textContent = '';

    //get pressed button
    const key = event.target.textContent;


    //if pressed number 0-9 or dot
    if(numbers.includes(key)) {
        if(b === '' && sign === '') {
            a+=key;
            console.log(a, b, sign);
            out.textContent = a;
        }
        else if(a!== '' && b!== '' && finish) {
            b = key;
            finish = false;
            out.textContent = b;
        }
        else {
            b += key;
            out.textContent = b;
        }
        console.log(a, b, sign);
        return;

    }

    //if pressed  + - / * 
    if(action.includes(key)) {
        sign = key;
        out.textContent = sign;
        console.log(sign);
        return;
    }

    //if pressed =
    if(key === '=') {
        if(b === '') b = a;
        switch (sign) {
            case '+':
                a = (+a) + (+b);
                break;
            case '-':
                a = a - b;
                break;
            case 'X':
                a = a * b;
                break;
            case '/':
                if(b === '0') {
                    out.textContent = 'error';
                    a = '';
                    b = '';
                    sign = '';
                    return;
                }
                a = a / b;
                break;
            
        }
        finish = true;
        out.textContent = a;
        console.log(a, b, sign);
    }
}
