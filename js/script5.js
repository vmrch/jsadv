var personObj = JSON.parse(localStorage.person);
alert(personObj.firstName + " " + personObj.lastName);

localStorage.firstName = "Jane";
localStorage.setItem("lastName","Doe");

alert(localStorage.firstName+ " "+localStorage.lastName);
alert(localStorage.firstName+ " "+localStorage.getItem("lastName"));

localStorage.removeItem("lastName");
alert(localStorage.lastName);

localStorage.clear();
alert(localStorage.firstName);