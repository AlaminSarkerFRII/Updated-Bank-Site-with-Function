
//button k access ......

document.getElementById('submit-btn').addEventListener('click', function(){
    //get Email from user
   const emailField =  document.getElementById('user-email');
   const userEmail = emailField.value;
   
   //get password from user
   const passwordField = document.getElementById('user-password');
   const userPassword = passwordField.value;

   // condition for user login...user and password check......
   if(userEmail == 'anng.bank@info.com' && userPassword =='secret'){ // aicondition fill up hole next pages a jabe........

    window.location.href = 'banking.html'; // banking.html page a niye jabe....
   }

})

