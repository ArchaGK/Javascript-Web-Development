var database  = [{

	username : "tom",
	password : "111" 
},
{
	username : "tine",
	password : "678"
}
];


var newsfeed  = [{

	username : "rita",
	timeline : "how are you" 
},
{
	username : "hina",
	timeline : "happy happy"
}
];



function userValid (username,password){

	for (var i=0;i<database.length;i++){

		if (database[i].username == username && database[i].password == password){
			return true;
		}

	}
	
	return false;

	
}

function signIn(username,password){

	if (userValid(username,password)){
		console.log(newsfeed);
	}
	else { 
		alert("Sorry, wrong username & password");
 
	}
  

}



var userprompt = prompt("enter user name");
var passprompt = prompt("enter password");

signIn(userprompt,passprompt);


