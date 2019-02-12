"use strict";
function checkUsername(){
	var user = document.getElementById('name');
	
	if(checkEmpty(user.value) || checkEmpty(password.value)){return};
	
	if(user.value.length < 8){
		alert("The name is too short!");
	}
	checkPassword();

}

function checkPassword(){
	var password = document.getElementById('password');
	var pass = password.value;
	var len = password.value.length;
	var letter = '';
	for(var i = 0; i < len ; ++i){
		letter = pass.charAt(i);
		if(letter >= '0' & letter <= '9'){
			return(true);
		}
	}
	alert ("The password must contain digits!");
}

function checkEmpty(str){
		if(str.length == 0){
			alert ("You didn't enter username or password!");
			return(true);
		}
}

function loadXML() {
  var xht = new XMLHttpRequest();
  xht.onreadystatechange = function() {
    if (this.readyState == 4){
		if(this.status == 200){
		  document.getElementById("demo").innerHTML =
		  this.responseText;
		}
    }
  };
  xht.open("GET", "message.txt", true);
  xht.send();
}

function Time(){
	var d = new Date();
	document.getElementById("time").innerHTML = d;
}
