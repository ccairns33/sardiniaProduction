// const nameInput = document.getElementById('name');
// const emailInput = document.getElementById('email');
// const messageInput = document.getElementById('message');
// const formSections = document.querySelectorAll(".form-section")


// let contactFormSubmitListener = () =>{
//     const form = document.querySelector('.contact-form');
//     form.addEventListener('submit', e => {
//         e.preventDefault();
//         checkInputs();
// 		// if form is successful, will display message.
// 		formSuccess();
		
		
//     });
// }
// let removeSuccess = () =>{
// 	let arrFormSections = Array.from(formSections);
// 	arrFormSections.forEach( section => {
// 		section.classList.remove("success");
// 	})
// }
// let clearInputs= () => {
// 	nameInput.value ="";
// 	emailInput.value = "";
// 	messageInput.value="";
// }
// let checkInputs = () => {
// 	// trim to remove the whitespaces
// 	const nameValue = nameInput.value.trim();
// 	const emailValue = emailInput.value.trim();
// 	const messageValue = messageInput.value.trim();
	
// 	if(nameValue === '') {
// 		setErrorFor(nameInput, 'Name cannot be blank');
// 	} else {
// 		setSuccessFor(nameInput);
// 	}
	
// 	if(emailValue === '') {
// 		setErrorFor(emailInput, 'Email cannot be blank');
// 	} else if (!isEmail(emailValue)) {
// 		setErrorFor(emailInput, 'Please enter a valid email');
// 	} else {
// 		setSuccessFor(emailInput);
// 	}
//     if(messageValue === '') {
// 		setErrorFor(messageInput, 'Message cannot be blank');
// 	} else {
// 		setSuccessFor(messageInput);
// 	}
	
// }
// let formSuccess = () =>{
//     let arrFormSections = Array.from(formSections);
// 	let filteredArr =[];
// 	arrFormSections.forEach(element =>{
// 		if (element.classList.contains("success")){
// 			filteredArr.push(element);
// 		}
// 	})
    
//     if (filteredArr.length > 2){
// 		let formData = {
// 			name: nameInput.value,
// 			email: emailInput.value,
// 			message: messageInput.value
// 		}
// 		let xhr = new XMLHttpRequest();
// 		xhr.open('POST', '/contact');
// 		xhr.setRequestHeader('content-type', "application/json");
// 		console.log("xhr response:" +xhr.responseText);
// 		xhr.onload = () => {
// 			console.log("xhr response:" +xhr.responseText);
// 			if (xhr.responseText == "success"){
// 				alert("Message sent!");
// 				clearInputs();
// 				removeSuccess();
// 			}else {
// 				alert("An Error occured. Please try again.")
// 			}
// 		}
// 		xhr.send(JSON.stringify(formData));
// 	}
// 	else {
// 		return;
// 	}
// }


// let setErrorFor = (input, message)=> {
// 	const formControl = input.parentElement;
// 	const small = formControl.querySelector('small');
//     formControl.classList.remove("success");
// 	formControl.classList.add("error");
// 	small.innerText = message;
// }

// let setSuccessFor = (input) =>{
// 	const formControl = input.parentElement;
//     formControl.classList.remove("error");
// 	formControl.classList.add("success");
// }
	
// let isEmail = (email) => {
// 	return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
// }

// export {contactFormSubmitListener};