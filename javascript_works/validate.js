// JavaScript Document
var hasFocus = false;

/*-------------------------------------Name validation-----------------------------------*/
 function checkName(form1)
{
  var b=document.getElementById('nameerror');
  var nam = document.form1.ename.value;
  var error=false;
  b.innerHTML='';
  if (nam == '') {
   error='Error: Username cannot be blank!';
  }
  else if (nam.length < 4) 
{
    error="UserName should be atleast 4 characters long";
  }
  if (error)
{
   if (hasFocus == false) {
     document.form1.ename.focus();
     hasFocus = true;
   } 
   b.innerHTML=error;
   return false;
  }
  return true;
  }
  
  
  /*--------------------------------------------Address validation*--------------------------------------------------*/
  function checkAddress(form1)
{
  var b=document.getElementById('addresserror');
  var addr = document.form1.address.value;
  var error=false;
  b.innerHTML='';
  if (addr == '') {
   error='Error: Address cannot be blank!';
  }
  else if (addr.length < 4) 
{
    error="UserName should be atleast 4 characters long";
  }
  if (error)
{
   if (hasFocus == false) {
     document.form1.address.focus();
     hasFocus = true;
   } 
   b.innerHTML=error;
   return false;
  }
  return true;
  }
  
 
 
 /*-------------------------------------- Age validation-------------------------------------------- */
 function validAge(form1)              
{          
 var b=document.getElementById('ageerror');
 //var valid = '0123456789';
 var age1 = document.form1.age.value;
 var error=false;
 /*var i=0;
 var temp;*/
 b.innerHTML='';
 if (age1 == "" || age1!=ParseInt(age1))
 {
  error='Please enter your age and it should be number.';
 }
 else (!age1.length > 16 || age1.length < 60)
 {
  error='Age should be between 16 and 60! Please try again.';
 }
 /*else 
 {
  for (i=0; i < age1.length; i++)
 {
   temp = '' + age1.substring(i, i + 1);
   if (valid.indexOf(temp) == -1)
    {
    error='Invalid characters. Please try again.';
    }
  }
 }*/
 if (error)
 {
   if (!hasFocus) {
     document.form1.age.focus();
     hasFocus = true;
   } 
  b.innerHTML=error;
  return false;
 }
 return true;
}



 /*------------------------------------------------  email validation-------------------------------------- */
function checkEmail(form1)         
{
 var b=document.getElementById('emailerror');
 b.innerHTML='';
 var error = false;
  if (form1.email.value.length == 0) {
    error = 'Please enter your email.';
  } else if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(form1.email.value))
 {
  return true;
 } else {
   error = 'Invalid E-mail Address! Please re-enter.';
 }
 if (error) {
   b.innerHTML=error;
   if (!hasFocus) {
     document.form1.email.focus();
     hasFocus = true;
   } 
   return false;
 }

 return true;
}


function validate() 
 {
  hasFocus = false;
 var form1 = document.forms['form1'];
 var arr=[checkName,checkAddress,validAge,checkEmail];
 var rtn=true;
 var i=0;
 for (var i=0;i<arr.length;i++)
{
  if (!arr[i](form1))
  {
    rtn=false;
  }
 }
 return rtn;
}



















/*function abc(){
var ename=document.form1.ename.value;
var address=document.form1.address.value;
var age=document.form1.age.value;
var email=document.form1.email.value;

var a=document.getElementById("error");
a.innerHTML="Error message here";
*/

  
  


/*if(age="" || age!=parseInt(age))
alert("Age should be number and not be empty");

if(Address="")
alert("Address field must be filled");
} 
if(ename=""){
document.getElementById("nameerror").style.display="";
return false;
}
return true;
} */


/*var b=document.getElementById("btn1");
b.onclick=checkName;
b.style.color="red";
b.style.marginLeft="20px";
b.style.border="1px solid blue";*/



//b=document.getElementById("footer-wrapper");
//b.innerHTML= "something here";