// login and sign in jQuery
let btnlogin = document.getElementById("login");
let btnSignUp = document.getElementById("signup");


let signIn = document.querySelector(".signin");
let signUp = document.querySelector(".signup");


btnlogin.onclick = function(){
    signIn.classList.add("active");
    signUp.classList.add("inActive");


}

btnSignUp.onclick = function(){
    signIn.classList.remove("active");
    signUp.classList.remove("inActive");
    

}

// DataPicker jQuery 
    $(document).ready(function() {
      
        $(function() {
            $( "#my_date_picker" ).datepicker();
            ({
                changeMonth: true,
                changeYear: true
            });
        });
    })

// Focus jQuery
$(document).ready(function(){
    $("#passfocus").focus(function(){
      $(".hide").css("display", "inline").fadeOut(2000);
    });
  });