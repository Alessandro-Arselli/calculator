let screenContent = document.querySelector('.calculatorScreen');
let clear = document.getElementById('clear');
let numbers = document.querySelectorAll(".number");
let equals = document.getElementById('equals');
let del = document.getElementById('delete');
let operatorCalled = false;
let firstNumber = '';
let secondNumber ='';
let operators = document.querySelectorAll(".operator");
let currentOperator = '';


function add(num1,num2)
{
    let result = num1 + num2;
    return result;

}

function subtract(num1,num2)
{
    let result = num1 - num2;
    return result;
}

function multiply(num1,num2)
{
    let result = num1 * num2;
    return result;
}

function divide(num1,num2)
{
    let result = num1 / num2;
    return result;
}

function operate(operator,num1,num2)
{   let result;
    if(operator == '+')
    {
        result = add(num1,num2);
        
    }
    else if(operator == '-')
    {
        result = subtract(num1,num2);
    }
    else if(operator == '*')
    {
        result = multiply(num1,num2);
    }
    else if(operator == '/')
    {
        result = divide(num1,num2);
    }

    return result;

}


numbers.forEach(number =>{
    
    
    
    number.addEventListener('click',(click)=>{
       
        console.log(operatorCalled);
        if(screenContent.innerText === '0') screenContent.innerText = '';
        
        if(operatorCalled === false){
            //REMINDER add something to check if the number starts with a decimal point and add a 0 in front
            firstNumber = firstNumber + click.target.innerText;
            screenContent.innerText = screenContent.innerText + click.target.innerText;

            console.log("First number: " + firstNumber);
        }
      
        if(operatorCalled === true){
            //REMINDER, add something to check if the number starts with a decimal point and add a 0 in front
            secondNumber = secondNumber + click.target.innerText;
            screenContent.innerText = screenContent.innerText + click.target.innerText;
    
            console.log("Second number:" + secondNumber);
        }
       
       
    })
});


operators.forEach(operator =>{
    operator.addEventListener('click',(click)=>{
       if(operatorCalled === false){
        currentOperator = click.target.innerText;
        operatorCalled  = true;
        screenContent.innerText = screenContent.innerText + currentOperator;
        console.log(currentOperator);

       }
        
    })
});


equals.addEventListener('click',() =>{


    if(operatorCalled === true){
         let result =  operate(currentOperator,parseFloat(firstNumber),parseFloat(secondNumber))
        
        screenContent.innerText = result;
        firstNumber = result;
        operatorCalled = false;
        secondNumber = ''
        currentOperator ='';
        
      console.log(result);
    } 
  

});

//Clear the screen and reset all values to default
clear.addEventListener('click',(click) =>{
    
    screenContent.innerText ='0';
    firstNumber = '';
    secondNumber = '';
    operatorCalled = false;
    currentOperator= '';
    console.log(click.target.innerText);
});

del.addEventListener('click',(click) =>{
    
    
     if(operatorCalled === false){
        firstNumber = screenContent.innerText = screenContent.innerText.slice(0,-1);
        console.log('1');

     } 
     //checks to see if the last input was an operator.
     else if(operatorCalled === true &&  screenContent.innerText.slice(-1) == '+' || screenContent.innerText.slice(-1) == '-' ||
             screenContent.innerText.slice(-1) == '*' ||screenContent.innerText.slice(-1) == '/')
             {

                screenContent.innerText = screenContent.innerText.slice(0,-1);
                operatorCalled = false;
                console.log('2')
             }
     else
     {
        console.log(screenContent.innerText.slice(0,-1));
        screenContent.innerText = screenContent.innerText.slice(0,-1);
        secondNumber = secondNumber.slice(0,-1);
        console.log('3')
     }
     
    console.log(click.target.innerText);
    let test = screenContent.innerText;
     console.log(typeof(test));
     if(screenContent.innerText == '') screenContent.innerText = "0";
    
});







 