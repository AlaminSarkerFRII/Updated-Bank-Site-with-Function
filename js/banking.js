
document.getElementById('deposit-btn').addEventListener('click', function(){
   const depositInput = document.getElementById('deposit-input');
   const depositAmountText = depositInput.value;
   const depositAmount = parseFloat(depositAmountText);

   //get current Deposit Amount

   const depositTotal = document.getElementById('deposit-total');

   const depositTotalText = depositTotal.innerText; //text hisabe pabo....
   const previousDepositTotal = parseFloat(depositTotalText); // floaat a convert korbe

   depositTotal.innerText = previousDepositTotal + depositAmount;

   //update main Balance ...........

const balanceTotal = document.getElementById('balance-total');

const balanceTotalText = balanceTotal.innerText;
const previousBalanceTotal = parseFloat(balanceTotalText);
balanceTotal.innerText = previousBalanceTotal + depositAmount; 

   //clear input field of deposit
   depositInput.value = '';
});

// <======handle withdraw balance ======>

document.getElementById('withdraw-btn').addEventListener('click', function(){
    const withdrawInput = document.getElementById('withdraw-input');
    const withdrawAmountText = withdrawInput.value;
    const withdrawAmount = parseFloat(withdrawAmountText);
    // console.log(withdrawTotal);

    //update withdraw balance........

   const withdrawTotal =  document.getElementById('withdraw-total');
   const withdrawTotalText = withdrawTotal.innerText;
   const previousWithdrawTotal = parseFloat(withdrawTotalText);
   withdrawTotal.innerText = previousWithdrawTotal + withdrawAmount;

// update main balance after withdraw ............

const balanceTotal = document.getElementById('balance-total');
const balanceTotalText = balanceTotal.innerText;
const previousBalanceTotal = parseFloat(balanceTotalText);
balanceTotal.innerText = previousBalanceTotal - withdrawAmount;



//clear withdra field .......

withdrawInput.value = '';

})

