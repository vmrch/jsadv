(function() {
	var eventUtility;
	alert(option.value);
	 var form = document.getElementById("theForm");
	   button = form.myButton,
	   textbox = form.myTextbox,
	   select = form.dayOfWeek,
	   color = form.color,
	   textarea = form.myTextArea;
	 eventUtility.addEvent(form,"submit", function(evt) {
      eventUtility.preventDefault(evt);
	 });
	 //form.submit();
	 //form.reset();
	 eventUtility.addEvent(button, "click", function(evt) {
	 	var target = eventUtility.getTarget(evt);
	 	//alert("you clicked me!");
	 	alert(target.value);
	 	alert(target.type);
	 	//target.disabled =true;
	 	//target.disabled = false;
	 	// if (textbox.value === "") {
	 	// 	alert("please input data in box");
	 	// 	textbox.focus();
	 	// }
	 	// if (textarea.value === "") {
	 	// 	alert("please input data in  largerbox");
	 	// }
	 	//textarea.select();
	 	textarea.disabled = true;
	 	textarea.value ="dsnfs";
	 	var index = select.selectedIndex;
	 	//var option = select.options[index];
var option = select.selectedOption[0];
	 	alert(option.value);
	 	var option = select.options[index];
	 	select.remove(3);
	 	var wedOption = new Option("Wednesday",3);
	 	select.options[select.options.length] = wedOption;
	 	select.add(wedOption,select.options[5]);
	 	color.checked =true;
	 	for(var i=0, l= color.length; i< i+1;) {
	 	if (color[i].checked){
	 		alert(colo[i].value);
	 	}
	 };
	 var pickedColors = [];//""
	 for(var i=0, l= color.length; i< i+1;) {
	 	if (color[i].checked){
	 		pickedColors.push(colo[i].value);
	 		//pickedColor = color[i].value;
	 	}
	 }
	 alert(pickedColor);
	 alert(pickedColors.join(","))
	 });
}());