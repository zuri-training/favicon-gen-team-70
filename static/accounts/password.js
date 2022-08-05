 var state = false;
 function toggle(){
     if(state){
         document.getElementById("password").setAttribute("type","password");
         state = false;
     }
     else{
        document.getElementById("password").setAttribute("type", "text");
         state = true;
     }
 };

 function matchPassword(){
     var pw1 = document.getElementById("pswd1").value;
     var pw2 = document.getElementById("pswd2").value;

     if(pw1 == ""){
         document.getElementById("message1").innerHTML = "Fill the password please!"
         return false
     };

    //  check empty confirm password field
    if(pw2 == ""){
        document.getElementById("message2").innerHTML = "Enter the password please!"
        return false;
    };

    // minimum password length validation
    if(pw1.length < 8){
        document.getElementById("message1").innerHTML = "Password must contain atleast 8 characters"
        return false
    };

    // maximum length of password validation 
    if(pw1.length > 15){
        document.getElementById("message1").innerHTML = "Password length must not exceed 15 characters";
        return false
    };
     
     if(pw1 != pw2){
         document.getElementById("message2").innerHTML = "passwords did not match"
         return false;
     } else{
         alert("Password created Successfully")
     }
 };