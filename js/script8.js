 var xhr = new XMLHttpRequest();
var person = {
	firstName:"John",
	lastName :"Doe",
	age : 47
};
     xhr.open("POST","rss.json.txt", true );
     
xhr.setRequestHeader("Content-Type", "application/json");
     xhr.onreadystatechange = function () {
		if (xhr.readyState ===4 ) {
		alert(xhr.responseText);
		var status = xhr.status;
		if ((status >=200 && status <300)||
			status === 304) {
				alert(xhr.responseText);
			var rss = JSON.parse(xhr.responseText);
			
			alert(rss.channel.title);
			alert(rss.channel.items[0].description);
			//for json parsing
			var json =JSON.stringify(rss);
			alert(json === xhr.responseText);
			}
		}
    };
    xhr.send(JSON.stringify(person));
    //eventUtility.preventDefault(evt);