

//задание 3
let password = document.getElementById('pass');
let toConfirm = document.getElementById('repeatPas');
let birthDate = document.getElementById('date');
let button = document.getElementById('btn');
let form = document.getElementById('form');


function toValidateForm() {
	if (!userName){

	}
}

const  formCompleted = {
	fields: [
		{
			name: "name",
			id: "name",
			element: null,
			regEx: /^[А-ЯA-z][а-яa-z]+\s*$/,
			valid: false,
			errorText: 'Поле не заполнено'
		},
		{
			name: "lastName",
			id: "lastname",
			element: null,
			regEx: /^[А-ЯA-z][а-яa-z]+\s*$/,
			valid: false,
		},
		{
			name: "email",
			id: "mail",
			element: null,
			regEx: /^[^@\s]+@[^@\s]+\.[^@\s]+$/,
			valid: false,
		},
		{
			name: "password",
			id: "pass",
			element: null,
			regEx:/^(?=.*?[0-9])(?=.*?[A-Z])(?=.*?[a-z])[0-9a-zA-Z]{8,}$/,
			valid: false,
		},
		{
			name: "confirmPassword",
			id: "repeatPas",
			element: null,
			valid: false,
		},
		{
			name: "birthdate",
			id: "date",
			element: null,
			valid: false,
		},
	]
}
	/*let today = new Date();
	let todayYear = today.getFullYear();
	console.log(todayYear)
//	let birthYear = birthDate.value.getFullYear();
	console.log(birthDate.value);
	console.log(birthDate);
	//let age = todayYear - birthYear;
//	console.log(age);*/


//const that = this;
formCompleted.fields.forEach(item => {
	item.element = document.getElementById(item.id);
	item.wasChanged = false;
	item.element.onblur = function () {
		item.wasChanged = true;
		validationField(item, this);
	}
});
function validationField(field, element) {
	if (!element.value || !element.value.match(field.regEx)) {
		element.style.borderColor = 'red';
		element.parentNode.lastElementChild.style.display = 'block';
		field.valid = false;
	}
	else{
		element.removeAttribute('style');
		element.parentNode.lastElementChild.style.display = 'none';
		field.valid = true;
	}

	 if (field.name === 'confirmPassword'){
		 if (password.value !== toConfirm.value){
			 element.style.borderColor = 'red';
			 element.parentNode.lastElementChild.style.display = 'block';
			 field.valid = false;
		 } else {
			 element.removeAttribute('style');
			 element.parentNode.lastElementChild.style.display = 'none';
			 field.valid = true;
		 }
		 return field.valid = true;
	}
	let today = new Date();
	let birthday = new Date(birthDate.value)
	let age = today.getFullYear() - birthday.getFullYear();
	age < 18?  field.valid = false : field.valid = true;
	validateForm();
}
function validateForm (){
	const  validForm = formCompleted.fields.every(item => item.valid);

	if (validForm) {
		button.removeAttribute('disabled');
	} else {
		button.setAttribute('disabled', 'disabled');
	}
	return validForm
}
function toClick(){
	form.reset();
}