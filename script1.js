let checkLogin = (email, password, allUsers) =>{
	let isUserFound = false;
	let passwordCorrect = false;
	
	for (currentUser in allUsers){
		console.log(currentUser);
		if(allUsers[currentUser]['email'] == email){
			if(allUsers[passwordCorrect]['password'] == password){
				isUserFound = true;
				passwordCorrect = true;
				break;
			}else{
				isUserFound = true;
				passwordCorrect = false;
				break;
			}
		}else{
				isUserFound = false;
		}
	}
	
	if(isUserFound == true && passwordCorrect == true){
		alert('You are logged in');
	}else if(isUserFound == true && passwordCorrect == false){
		alert('Please enter correct password');
	}else{
		alert('enter a valid email address');
	}
}


//The Second function written in es6 format
		let bubble_Sort=(a) =>{
		let swapp;
		let n = a.length-1;
		let x=a;
		do{
			swapp = false;
			for(var i=0; i<n; i++){
				if(x[i]<x[i+1]){
					let temp = x[i];
					x[i] = x[i+1];
					x[i+1] = temp;
					swapp = true;
				}
					
			}
			n--;
		}
		while(swapp);
		return x;
	}