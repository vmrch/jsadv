(function(){
	try {
  alert("thiswill not fail");
  abert("this will fail");

	} catch(err) {
    alert("an error");
    alert(err.message);
	} finally {
		alert("This is within Finally");
	}
}());