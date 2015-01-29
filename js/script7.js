 var xhr = new XMLHttpRequest();
     xhr.open("GET","rss.json.txt", true );
     

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
    xhr.send(null);
    //eventUtility.preventDefault(evt);