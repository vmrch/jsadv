	var form = document.getElementById("theForm");

eventUtility.addEvent(form,"submit", function(evt) {
     
     var data = getRequestBbody();
     //ajax post request add this code
     xhr.open("POST","textfile.txt", true );
     xhr.onreadystatechange = function () {
		if (xhr.readyState ===4 ) {
		alert(xhr.responseText);
		var status = xhr.status;
		if ((status >=200 && status <300)
			status === 304{
				alert(xhr.responseText);
			} else {
				alert("Something had happs");
			}
		}
};
    
	eventUtility.preventDefault(evt);
  alert(data);
});

var xhr =new XMLHttpRequest();

//xhr.open("GET","textfile.txt", false );//SYNCHRONOUS method
//true is asynchronous method

xhr.send(null);
alert(xhr.responseText);
alert(xhr.responseXML);
alert(xhr.responseJSON);
//ASYNCHRONOUS call
xhr.open("GET","textfile.txt", true );
xhr.onreadystatechange = function () {
	if (xhr.readyState ===4 ) {
		alert(xhr.responseText);
	}
};
xhr.send(null);
alert(xhr.responseText + "this is out of event handler");
//to get xhr status
xhr.onreadystatechange = function () {
	if (xhr.readyState ===4 ) {
		var status = xhr.status;
		if ((status >=200 && status <300)
			status === 304{
				alert(xhr.responseText);
			} else {
				alert("Something had happs");
			}
		//404-  server error.
		//505- file error
		//304- its okay check it back with cookies
		alert(xhr.responseText);
	}
};
//for post methods
xhr.open("POST","textfile.txt", true );
xhr.onreadystatechange = function () {
	if (xhr.readyState ===4 ) {
		alert(xhr.responseText);
	}
};

alert(xhr.responseText + "this is out of event handler");
//to get xhr status
xhr.onreadystatechange = function () {
	if (xhr.readyState ===4 ) {
		var status = xhr.status;
		if ((status >=200 && status <300)
			status === 304{
				alert(xhr.responseText);
			} else {
				alert("Something had happs");
			}
		//404-  server error.
		//505- file error
		//304- its okay check it back with cookies
		alert(xhr.responseText);
	}
};
xhr.send(null);

var getRequestBbody = function(){
	//var form = document.getElementById("theForm");
	var values =[];

	for (var i=0; l= form.elements.length; i<l;i=i+1){
		var el = form.elements[i],
		name = encodeURIComponent(el.name),
		value = encodeURIComponent(el.value),
		complete = name + " = " +value;
       value.push(complete);
	}
	return values.join("&");
}
