var keys = [12345, 23456, 34567]; // Currently stored security keys
var reports = []; // Array of submitted reports

function init(){
  document.getElementById("finish").onclick=finishReport;
  document.getElementById("entercode").onclick=codeButton;
  toggleElements(true); 
}

// Enable or disable fields
function toggleElements(isEnabled) {
  document.getElementById("lname").disabled=isEnabled;
  document.getElementById("fname").disabled=isEnabled;
  document.getElementById("yourlname").disabled=isEnabled;
  document.getElementById("yourfname").disabled=isEnabled;
  document.getElementById("grade").disabled=isEnabled;
  document.getElementById("teacher").disabled=isEnabled;
  document.getElementById("relation").disabled=isEnabled;
  document.getElementById("phone").disabled=isEnabled;
  document.getElementById("email").disabled=isEnabled;
  document.getElementById("date").disabled=isEnabled;
  document.getElementById("reason").disabled=isEnabled;
  document.getElementById("otherreason").disabled=isEnabled;
  document.getElementById("submit").disabled=isEnabled;
  
}

// Validate the entered security key
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
      return true;
    }
  }
  return false;
}

// Validate the form
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

// Generate a security key, 10000-99999 inclusive
function generateSecurityKey(){
  var key=getRandNum(10000, 100000);
  keys.push(key);
}

// Notify successful submission and store information
function finishReport(){
  if(validateForm()) {
    alert("Your request has been recieved by the system. You will be informed when it is approved or denied.");
    reports.push(new report(
	document.getElementById('lname').value,
	document.getElementById('fname').value,
	document.getElementById('yourlname').value,
	document.getElementById('yourfname').value,
	document.getElementById('date').value,
	document.getElementById('grade').value,
	document.getElementById('teacher').value,
	document.getElementById('phone').value,
	document.getElementById('email').value,
	document.getElementById('reason').value));
  }
}

// Return a random int between min and max
function getRandNum(min, max){
  return Math.floor((Math.random() * max) + min); 
}

// Class to hold report info
function report(lname, fname, parentLname, parentFname, times, grade, teacher, phone, email, reason) {
  this.lname=lname;
  this.fname=fname;
  this.parentLname=parentLname;
  this.parentFname=parentFname;
  this.times=times;
  this.grade=grade;
  this.teacher=teacher;
  this.phone=phone;
  this.email=email;
  this.reason=reason;
}

// Placeholder function to move all submissions to permanent storage at the end of the day
function commitDailyReports(){
  var curTime = new Date();
  //if(curTime.getHours == 0 && curTime.getMinutes == 0 && curTime.getSeconds == 0)
    // Push all reports to storage - out of scope of project, so nothing happens here
}
window.onload=init;