document.getElementById("new_to_shop").addEventListener("click",function() {

  document.getElementById("breadcrumb").textContent='Home / SignUp';
  document.getElementById("new_to_our_shop").style.display='none';
  document.getElementById("login").style.display='none';
  document.getElementById("already_our_customer").style.display='block';
  document.getElementById("sign_up").style.display='block';
});

document.getElementById("already_customer").addEventListener("click",function() {

  document.getElementById("breadcrumb").textContent='Home / Login';
  document.getElementById("new_to_our_shop").style.display='block';
  document.getElementById("login").style.display='block';
  document.getElementById("already_our_customer").style.display='none';
  document.getElementById("sign_up").style.display='none';
});

document.getElementById("sign_up_bttn").addEventListener("click",function() {
  var pass1=document.getElementById("sign_password").value;
  var pass2=document.getElementById("conf_password").value;
  var name=document.getElementById("name").value;
  var email=document.getElementById("email").value;
  var phone=document.getElementById("tel-num").value;
  var question=document.getElementById("sec_quest_").value;
  var answer=document.getElementById("Sec_ans_").value;

  if(pass1!=pass2){
    alert("Passwords does not match !");

  }else if (pass1=="" || pass2=="" ||name=="" || email=="" || phone=="") {

    alert("Please fill all fields!");

  }
  else if(pass1.length<8 || pass2.length <8 ){
    alert("password must contain atleast 8 letter")

  }
  else if(phone.length!=10 || (/^[0-9]*$/.test(phone))==false){
    alert("enter a valid mobile number");

  }
  else if(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)==false){
    alert("enter a valid email adress");
  }
  else{
    signup();
    //document.getElementById("sign_up_form").submit();
  //   $("#sign_up_bttn").click(function (e) { 
  //     e.preventDefault();
  //     signup();
  // });
  function signup(){
     
          datas={
          

            firstName:name,
            email:email,
            password:pass1,
            questionId:question,
            answer:answer,
            mobile:phone,
          
     
         }
      
  
      console.log(datas)
      $.ajax({
          type: "POST",
          url: "http://localhost:8080/signup",
          contentType: 'application/json',
          data: JSON.stringify(datas),
          dataType: "json",
          
          success: function (response) {
              console.log(response);
              if(response.status_Message=="User added successfully"){
                alert("signup successfull");
              }
              else if (response.status_Message == "User already exist") {
                alert("user already exist");
              }
              else{
                alert("Invalid credentials");
              }
              
          }
      });
  }
  
  }


});


document.getElementById("forgot_pswd").addEventListener("click",function() {

  document.getElementById("breadcrumb").textContent='Home / Login / Forgot password';
  document.getElementById("new_to_our_shop").style.display='none';
  document.getElementById("login").style.display='none';
  document.getElementById("already_our_customer").style.display='none';
  document.getElementById("sign_up").style.display='none';
  document.getElementById("forgot_password_left").style.display='block';
  document.getElementById("forgot_password").style.display='block';
  document.getElementById("change_password_right").style.display='none';
});

document.getElementById("fp_up_bttn").addEventListener("click",function(){
  var email= document.getElementById("fp_email").value;

  var dropdown = document.getElementById("sec_quest"); 
  var value = dropdown.options[dropdown.selectedIndex].value;
  var text = dropdown.options[dropdown.selectedIndex].text; 
  
  var answer= document.getElementById("Sec_ans").value;
  var newPassword= document.getElementById("fp_new_password").value;
  var confPassword= document.getElementById("fp_conf_password").value;
  var datas={
    
    email_Id:email,
    question_Id:value,
    security_Answer:answer,
    password:newPassword,
    extra:{
      password:newPassword,
      conf_password:confPassword
    }
    

  }
  console.log(datas);
  if(newPassword!=confPassword){
    alert("Passwords does not match !");

  }else if (newPassword=="" || confPassword=="" || answer=="" || email==""|| value=="") {

    alert("Please fill all fields!");

  }else if(newPassword.length<8){
    alert("password must contain atleast 8 letters")

  }
  else{

    //document.getElementById("forgot_password_form").submit();
    $.ajax({
      type: "POST",
      url: "http://localhost:8080/forgotpassword",
      contentType: 'application/json',
      data: JSON.stringify(datas),
      dataType: "json",
      
      success: function (response) {
        if(response.status_Message==="Password changed"){
          alert("Please login with new password");
          $('#forgot_password_form')[0].reset();
          window.location.href = "login.html";

        }
        else if(response.status_Message==="Invalid credentials"){
          alert("invalid credential")
        }
          console.log(response)
      }
  });
    
    // document.getElementById("login").style.display='block';
    // document.getElementById("already_our_customer").style.display='block';
    // document.getElementById("new_to_our_shop").style.display='none';
    
    // document.getElementById("forgot_password").style.display='none';
    // document.getElementById("forgot_password_left").style.display='none';
    // document.getElementById("change_password").style.display='none';
    $('#forgot_password_form')[0].reset();
  }
  
});

/////////////to be removed to profile section change password////////////////////

// document.getElementById("change_paswd_bttn").addEventListener("click",function() {
//   var oldPaswd=document.getElementById("chng_old_password").value;
//   var newPaswd=document.getElementById("chng_new_password").value;
//   var confPaswd=document.getElementById("chng_conf_password").value;
//   if(newPaswd!=confPaswd){
//     alert("Please confirm new password!");
//   }else if (newPaswd=="" || confPaswd=="" ||oldPaswd=="") {
//     alert("Please fill all fields!");
//   }
//   else{
//     //document.getElementById("change_password_form").submit();
//   }
// });
/////////////to be removed to profile section change password////////////////////

// function signup() {
//
//   document.getElementById("breadcrumb").textContent='Home / SignUp';
//   document.getElementById("new_to_our_shop").style.display='none';
//   document.getElementById("login").style.display='none';
//   document.getElementById("already_our_customer").style.display='block';
//   document.getElementById("sign_up").style.display='block';
//   document.getElementById("sign_up_bttn").disabled=false;
//
// }
