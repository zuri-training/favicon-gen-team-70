function myFunction(){
    var x = document.getElementById("myNavBar");
    if (x.className === "navbar"){
        x.className += "responsive";
    }
    else{
        x.className = "navbar"
    }
    
}