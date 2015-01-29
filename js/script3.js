	var form = document.getElementById("theForm");

eventUtility.addEvent(form,"submit", function(evt) {
     
     var data = getRequestBbody();
     //ajax post request add this code
     xhr.open("POST","textfile.txt", true );
     xhr.setRequestHeader("Content-Type",
     	"application/x-www-form-urlencoded");

     xhr.onreadystatechange = function () {
		if (xhr.readyState ===4 ) {
		alert(xhr.responseText);
		var status = xhr.status;
		if ((status >=200 && status <300)
			status === 304{
				alert(xhr.responseText);
			} else {
				alert(xhr.responseText);
			}
		}
};
    xhr.send(data);
    eventUtility.preventDefault(evt);