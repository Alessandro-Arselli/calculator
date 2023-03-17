
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
    else if(operator == '*')
    {
        result = divide(num1,num2);
    }

    return result;

}

console.log(operate('*',10,5));
