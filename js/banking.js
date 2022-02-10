
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
    debugger;
    const totalElement = document.getElementById(totalFieldId);
   const totalText = totalElement.innerText; //text hisabe pabo....
   const previousTotal = parseFloat(totalText); // floaat a convert korbe

   totalElement.innerText = previousTotal + amount;

}








document.getElementById('deposit-btn').addEventListener('click', function(){
  /*  const depositInput = document.getElementById('deposit-input');
   const depositAmountText = depositInput.value;
   const depositAmount = parseFloat(depositAmountText); */

   const depositAmount = getInputValue('deposit-input');

   //get current Deposit Amount

   /*
    const depositTotal = document.getElementById('deposit-total');
   const depositTotalText = depositTotal.innerText; //text hisabe pabo....
   const previousDepositTotal = parseFloat(depositTotalText); // floaat a convert korbe
   depositTotal.innerText = previousDepositTotal + depositAmount;
   
   */
  updateTotalField('deposit-total',depositAmount);

   //update main Balance ...........

const balanceTotal = document.getElementById('balance-total');

const balanceTotalText = balanceTotal.innerText;
const previousBalanceTotal = parseFloat(balanceTotalText);
balanceTotal.innerText = previousBalanceTotal + depositAmount; 


 
});

// <======handle withdraw balance ======>

document.getElementById('withdraw-btn').addEventListener('click', function(){
    /* const withdrawInput = document.getElementById('withdraw-input');
    const withdrawAmountText = withdrawInput.value;
    const withdrawAmount = parseFloat(withdrawAmountText); */
    // console.log(withdrawTotal);
const withdrawAmount = getInputValue('withdraw-input');

    //update withdraw balance........
   /*
   const withdrawTotal =  document.getElementById('withdraw-total');
   const withdrawTotalText = withdrawTotal.innerText;
   const previousWithdrawTotal = parseFloat(withdrawTotalText);
   withdrawTotal.innerText = previousWithdrawTotal + withdrawAmount;
    */

   updateTotalField('withdraw-total',withdrawAmount)

// update main balance after withdraw ............

const balanceTotal = document.getElementById('balance-total');
const balanceTotalText = balanceTotal.innerText;
const previousBalanceTotal = parseFloat(balanceTotalText);
balanceTotal.innerText = previousBalanceTotal - withdrawAmount;





})

