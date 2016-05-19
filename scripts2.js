var keys = [12345, 23456, 34567];
var students = ["Smith, Alice", "Cooper, Bob", "Branford, Charlie"];

function init(){
  document.getElementById("finish").onclick=randomApprove;
  document.getElementById("entercode").onclick=codeButton;
  toggleElements(true); 
}

function toggleElements(isEnabled) {
  document.getElementById("lname").disabled=isEnabled;
  document.getElementById("fname").disabled=isEnabled;
  document.getElementById("yourlname").disabled=isEnabled;
  document.getElementById("yourfname").disabled=isEnabled;
  document.getElementById("grade").disabled=isEnabled;
  document.getElementById("teacher").disabled=isEnabled;
  document.getElementById("relation").disabled=isEnabled;
  document.getElementById("date").disabled=isEnabled;
  document.getElementById("reason").disabled=isEnabled;
  document.getElementById("otherreason").disabled=isEnabled;
  document.getElementById("submit").disabled=isEnabled;
}

function codeButton(){
  var isCorrect = validateCode();
  if(!isCorrect)
    document.getElementById("codevalid").textContent="Invalid key";
  else {
    document.getElementById("codevalid").textContent="";
    toggleElements(false);
  }
}

function validateCode(){
  var code = document.getElementById("code").value;
  for(var i=0; i< keys.length; i++){
    if(code==keys[i]) {
      //document.getElementById("studentname").value=students[i];
      return true;
    }
  }
  return false;
}

function validateForm(){
  if(document.getElementById("date").value == null || document.getElementById("date").value == "" ||
     document.getElementById("lname").value == "Last name" ||
     document.getElementById("yourlname").value == "Last name" ||
     document.getElementById("fname").value == "First name" ||
     document.getElementById("yourfname").value == "First name") {
    document.getElementById("formvalidation").textContent = "All fields must be entered";
    return false;
    }
  document.getElementById("formvalidation").textContent = "";
  return true;
}

function randomApprove(){
  if(validateForm()) {
  var rand=getRandNum(1, 100);
  var isApproved = rand <=50? true: false;
  outputMessage(isApproved);
  }
}

function generateSecurityKey(){
  var key=getRandNum(1, 100000);
  keys.push(key);
}

function outputMessage(isAbsenceApproved){
  alert("Your request has been recieved by the system. You will be informed when it is approved or denied.");
}

function getRandNum(min, max){
  return Math.floor((Math.random() * max) + min); 
}

window.onload=init;