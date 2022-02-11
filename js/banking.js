
//using function for deposite

function getInputValue(inputId){
    const inputValue = document.getElementById(inputId);
    const inputAmountText = inputValue.value;
    const amountValue = parseFloat(inputAmountText);
      //clear input field of deposit ( 2tatei clear korbe)
   inputValue.value = ''; 

    return amountValue;
}

// use function for deposite and withdraw filed.......

function updateTotalField(totalFieldId,amount){
    // debugger;

    const totalElement = document.getElementById(totalFieldId);
   const totalText = totalElement.innerText; //text hisabe pabo....
   const previousTotal = parseFloat(totalText); // floaat a convert korbe

   totalElement.innerText = previousTotal + amount;
}


function getCurrentBalance(){
    const balanceTotal = document.getElementById('balance-total');
    const balanceTotalText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(balanceTotalText);
    return previousBalanceTotal;
}




function updateBalance(amount,isAdd){
   
   const balanceTotal = document.getElementById('balance-total');
   
   /*
    const balanceTotalText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(balanceTotalText);
     */

    const previousBalanceTotal = getCurrentBalance();

    if(isAdd ==true){
        balanceTotal.innerText = previousBalanceTotal + amount; 
    }
    
    else{
        balanceTotal.innerText = previousBalanceTotal - amount; 
    }  
}










//////////////////////////////////////////////////////////////////////


document.getElementById('deposit-btn').addEventListener('click', function(){
  
  
/* 
   const depositInput = document.getElementById('deposit-input');
   const depositAmountText = depositInput.value;
   const depositAmount = parseFloat(depositAmountText); 
   */

   //get current Deposit Amount

   /*
    const depositTotal = document.getElementById('deposit-total');
   const depositTotalText = depositTotal.innerText; //text hisabe pabo....
   const previousDepositTotal = parseFloat(depositTotalText); // floaat a convert korbe
   depositTotal.innerText = previousDepositTotal + depositAmount;
   */
 
   //update main Balance ...........

/* 
const balanceTotal = document.getElementById('balance-total');
const balanceTotalText = balanceTotal.innerText;
const previousBalanceTotal = parseFloat(balanceTotalText);
balanceTotal.innerText = previousBalanceTotal + depositAmount; 

 */

    const depositAmount = getInputValue('deposit-input');
    if(depositAmount > 0){
        updateTotalField('deposit-total',depositAmount);
        updateBalance(depositAmount,true);

    }
 
});


// <======handle withdraw balance ======>

document.getElementById('withdraw-btn').addEventListener('click', function(){
    /* const withdrawInput = document.getElementById('withdraw-input');
    const withdrawAmountText = withdrawInput.value;
    const withdrawAmount = parseFloat(withdrawAmountText); */
    // console.log(withdrawTotal);

    //update withdraw balance........
   /*
   const withdrawTotal =  document.getElementById('withdraw-total');
   const withdrawTotalText = withdrawTotal.innerText;
   const previousWithdrawTotal = parseFloat(withdrawTotalText);
   withdrawTotal.innerText = previousWithdrawTotal + withdrawAmount;
    */

// update main balance after withdraw ............

/* const balanceTotal = document.getElementById('balance-total');
const balanceTotalText = balanceTotal.innerText;
const previousBalanceTotal = parseFloat(balanceTotalText);
balanceTotal.innerText = previousBalanceTotal - withdrawAmount;
 */

    const withdrawAmount = getInputValue('withdraw-input');
    const currentBalance = getCurrentBalance();
    if(withdrawAmount >0 && withdrawAmount< currentBalance ){
        updateTotalField('withdraw-total',withdrawAmount)
        updateBalance(withdrawAmount,false);
    }
    if(withdrawAmount > currentBalance){
        alert ("you can't withdraw this amount");
    }
  
})

