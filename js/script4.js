var person = {
	firstName:"John",
	lastName :"Doe",
	age : 47
};
localStorage.firstName = "John";
localStorage.setItem("lastName", "Doe");
localStorage.age = 47;

var age = parseInt(localStorage.age, 10);
alert(typeof localStorage.age);
//localStorage.clear();
localStorage.person = person;
alert(localStorage.person);
localStorage.person=JSON.stringify(person);
var personObj = JSON.parse(localStorage.person);
alert(personObj.firstName + " " + personObj.lastName);
