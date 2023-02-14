//step-1 Add a click event handler in the submit button
document.getElementById('btn-submit').addEventListener('click', function(){
    //step-2 get the email address inside the input field
    const emailField = document.getElementById('user-email'); 
    const email = emailField.value;

    //step-3 get the password
    const passwordField = document.getElementById('user-password');
    const password = passwordField.value;
    // console.log(email, password); 

    // step-4 varify emial and password
    if(email === "demo@gmail.com" && password === "admin24"){
        console.log('Valid user!');
    }
    else{
        console.log('Invalid user');
    }
})

