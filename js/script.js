(function() {
	var eventUtility;
		var txtbox = document.getElementById("txtInput");

        eventUtility.addEvent(txtbox, "keypress",
         function(event) {
	         // evt .charCode

 	//some ascci codes for letters A-65,B-66,Z-90, a-97,z-122, 0-48,9-57
 	// evt.KeyCode - for  legacy IE users
               var code = eventUtility.getCharcode (event);

               if ((code >= 65 && code <=90) ||
               	(code >=97 && code <=122)){
                 eventUtility.preventDefault(evt);
               }else {
               	//eventUtility.preventDefault(evt);
               }
              // alert(code);
         });
        eventUtility.addEvent(document, "keydown",
        function(evt) {
	         // evt .charCode

 	//some ascci codes for letters A-65,B-66,Z-90, a-97,z-122, 0-48,9-57
 	// evt.KeyCode - for  legacy IE users
               var code = evt.KeyCode;
                  //altKey = evt.altKey;
                  ctrlKey = evt.ctrlKey;
                  //shiftKey = evt.shiftKey;

               if (ctrlKey && code === 66) {
               	alert ("you pressed ctrlKey+b");
               }
              // alert(code);
         });


	}());