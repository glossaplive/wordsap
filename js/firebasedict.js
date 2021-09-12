var listeninput1 = document.getElementById("myInput");
listeninput1.addEventListener("keydown", function (e) {
    if (e.keyCode === 13) {  //checks whether the pressed key is "Enter"
        engtogerfun();
	 wordsearchs();
		
     }
 });


window.onload = function()
{
	document.getElementById("gobackhome").style.display = "none";
	var readurl = window.location.href.split('?')[1];
  if (typeof readurl !== "undefined")
  {
	  //console.log("has value");
	  var repundtospace = readurl.replace(/_/g, ' ');
	  
		  
	  repundtospace = repundtospace.replace("%C3%84", 'Ä');
	  repundtospace = repundtospace.replace("%C3%A4", 'ä');
	  repundtospace = repundtospace.replace("%C3%B6", 'ö');
	  repundtospace = repundtospace.replace("%C3%BC", 'ü');
	  repundtospace = repundtospace.replace("%C3%9F", 'ß');
	  repundtospace = repundtospace.replace("%C3%96", 'Ö');
	  repundtospace = repundtospace.replace("%C3%9C", 'Ü');
	  console.log(repundtospace);
	  console.log(typeof(repundtospace));
	  document.getElementById("myInput").value = repundtospace;
	  engtogerfun();
	  //console.log(123);
		if (repundtospace != "")
		{
	  wordsearchs();
		}
	  
  }
  if (readurl == "" || (typeof readurl === "undefined"))
  {
	  document.getElementById("listtablehide").style.display = "block";
	  //console.log("empty");
  }
  else if (readurl != "" || (typeof readurl !== "undefined"))
  {
	  // document.getElementById("listtablehide").style.display = "none";
	  console.log("not empty");
  }


  var outpval = -1;
  
  
  var inputVal = document.getElementById("myInput").value;
   //console.log(inputVal);
	if (inputVal == null || inputVal == "")
	{
	document.getElementById("Dicresultsmain").style.display = "none";

	}
	else
	{
	document.getElementById("Dicresultsmain").style.display = "block";
	wordsearchs();
	}
	

  var readurl = window.location.href.split('?')[1];
  if (typeof readurl === "undefined")
	{
		//console.log("undefined true");
		
		/* start here */
		
		  var inc;
	  for(inc=0;inc<=Englishworddic.length-1;inc++)
	  {
		//console.log(inc);
		var countriesupp = Englishworddic[inc].toUpperCase();
		var germcountriesupp = Germanworddic[inc].toUpperCase();
		//console.log(countriesupp);
		//console.log(inputVal.toUpperCase());
		if(countriesupp == inputVal.toUpperCase() || germcountriesupp == inputVal.toUpperCase())
		{
			outpval=inc;
			//console.log(outpval);
			document.getElementById("GermanwordTab1").innerHTML = Germanworddic[outpval];
			document.getElementById("EnglishwordTab1").innerHTML = Englishworddic[outpval];
			document.getElementById("disclaimer").style.display = "none";
			//document.getElementById("listtablehide").style.display = "none";
			
			break;
			
			
		}
		else
		{
			document.getElementById("GermanwordTab1").innerHTML = "--Nicht verfügbar 😞 --";
			document.getElementById("EnglishwordTab1").innerHTML = "--Not Available 😞 --";		
			//document.getElementById("disclaimer").style.display = "block";
			//document.getElementById("listtablehide").style.display = "none";
		}
	  }
		//console.log(outpval);
		if (inputVal == null || inputVal == "")
		{
			document.getElementById("disclaimer").style.display = "none";
		}
		else 
		{
			if(outpval < 0)
			{
				$('#contact-form').submit(function(event) {
						  event.preventDefault();
						  //$('#feedback').html('');
						  setTimeout(function() {
							// Get data
							var data = {
							  'entry.1569258631': inputVal,
							  'entry.407126866': ''
							  //'entry.1569258631': $('#form-name').val(),
							  //'entry.407126866': $('#form-email').val()
							};

							// Validate form
							var formSuccess = true;

							if (formSuccess) {
							  // Send request
							  $.ajax({
								url: 'https://docs.google.com/forms/d/e/1FAIpQLScT5eahd-me4vPflbwFGIJuRUh0kS_dXFC1Hpu38Lo7i8BKJQ/formResponse',
								type: 'POST',
								crossDomain: true,
								dataType: "xml",
								data: data
							  });
							}
						  }, 300);
						});
						
				
			}
			else
			{
				$('#contact-form').submit(function(event) {
				  event.preventDefault();
				  //$('#feedback').html('');
				  setTimeout(function() {
					// Get data
					var data = {
					  'entry.1569258631': Englishworddic[outpval],
					  'entry.407126866': Germanworddic[outpval]
					  //'entry.1569258631': $('#form-name').val(),
					  //'entry.407126866': $('#form-email').val()
					};

					// Validate form
					var formSuccess = true;

					if (formSuccess) {
					  // Send request
					  $.ajax({
						url: 'https://docs.google.com/forms/d/e/1FAIpQLScT5eahd-me4vPflbwFGIJuRUh0kS_dXFC1Hpu38Lo7i8BKJQ/formResponse',
						type: 'POST',
						crossDomain: true,
						dataType: "xml",
						data: data
					  });
					}
				  }, 300);
				});
				
				
			}
		}
		var urlupdval = "?"+inputVal.replace(/\s+/g,"_");;
		/* ends here */
		window.history.pushState({"html":"","pageTitle":""},"", urlupdval);
		//console.log(urlupdval);
	}
	else
	{
		//console.log("string true");
		
	  
	  var inc;
	  for(inc=0;inc<=Englishworddic.length-1;inc++)
	  {
		//console.log(inc);
		var countriesupp = Englishworddic[inc].toUpperCase();
		var germcountriesupp = Germanworddic[inc].toUpperCase();
		
	    var repundtospace = readurl.replace(/_/g, ' ');
		if(countriesupp == inputVal.toUpperCase() || germcountriesupp == inputVal.toUpperCase())
		{
			outpval=inc;
			//console.log(outpval);
			document.getElementById("GermanwordTab1").innerHTML = Germanworddic[outpval];
			document.getElementById("EnglishwordTab1").innerHTML = Englishworddic[outpval];
			document.getElementById("disclaimer").style.display = "none";
			//document.getElementById("listtablehide").style.display = "none";
			break;
			
			
		}
		else
		{
			document.getElementById("GermanwordTab1").innerHTML = "--Nicht verfügbar 😞 --";
			document.getElementById("EnglishwordTab1").innerHTML = "--Not Available 😞 --";		
			//document.getElementById("disclaimer").style.display = "block";
			//document.getElementById("listtablehide").style.display = "none";
		}
	  }
		//console.log(outpval);
		if (repundtospace == null || repundtospace == "")
		{
			document.getElementById("disclaimer").style.display = "none";
		}
		else 
		{
			if(outpval < 0)
			{
				$('#contact-form').submit(function(event) {
						  event.preventDefault();
						  //$('#feedback').html('');
						  setTimeout(function() {
							// Get data
							var data = {
							  'entry.1569258631': repundtospace,
							  'entry.407126866': ''
							  //'entry.1569258631': $('#form-name').val(),
							  //'entry.407126866': $('#form-email').val()
							};

							// Validate form
							var formSuccess = true;

							if (formSuccess) {
							  // Send request
							  $.ajax({
								url: 'https://docs.google.com/forms/d/e/1FAIpQLScT5eahd-me4vPflbwFGIJuRUh0kS_dXFC1Hpu38Lo7i8BKJQ/formResponse',
								type: 'POST',
								crossDomain: true,
								dataType: "xml",
								data: data
							  });
							}
						  }, 300);
						});

			}
			else
			{
				$('#contact-form').submit(function(event) {
				  event.preventDefault();
				  //$('#feedback').html('');
				  setTimeout(function() {
					// Get data
					var data = {
					  'entry.1569258631': Englishworddic[outpval],
					  'entry.407126866': Germanworddic[outpval]
					  //'entry.1569258631': $('#form-name').val(),
					  //'entry.407126866': $('#form-email').val()
					};

					// Validate form
					var formSuccess = true;

					if (formSuccess) {
					  // Send request
					  $.ajax({
						url: 'https://docs.google.com/forms/d/e/1FAIpQLScT5eahd-me4vPflbwFGIJuRUh0kS_dXFC1Hpu38Lo7i8BKJQ/formResponse',
						type: 'POST',
						crossDomain: true,
						dataType: "xml",
						data: data
					  });
					}
				  }, 300);
				});

				
			}
		}
	}

}
function engtogerfun() 
{

  var outpval = -1;
 
  
  var inputVal = document.getElementById("myInput").value;
   //console.log(inputVal);
	if (inputVal == null || inputVal == "")
	{
	document.getElementById("Dicresultsmain").style.display = "none";

	}
	else
	{
	document.getElementById("Dicresultsmain").style.display = "block";
	}
	

  var inc;
  for(inc=0;inc<=Englishworddic.length-1;inc++)
  {
	//console.log(inc);
    var countriesupp = Englishworddic[inc].toUpperCase();
    var germcountriesupp = Germanworddic[inc].toUpperCase();
	//console.log(countriesupp);
	//console.log(inputVal.toUpperCase());
    if(countriesupp == inputVal.toUpperCase() || germcountriesupp == inputVal.toUpperCase())
    {
		outpval=inc;
		console.log(outpval);
		document.getElementById("GermanwordTab1").innerHTML = Germanworddic[outpval];
		document.getElementById("EnglishwordTab1").innerHTML = Englishworddic[outpval];
		document.getElementById("disclaimer").style.display = "none";
		//document.getElementById("listtablehide").style.display = "none";
		break;
		
		
	}
	else
	{
		document.getElementById("GermanwordTab1").innerHTML = "--Nicht verfügbar 😞 --";
		document.getElementById("EnglishwordTab1").innerHTML = "--Not Available 😞 --";		
		document.getElementById("disclaimer").style.display = "block";
		//document.getElementById("listtablehide").style.display = "none";
	}
  }
	//console.log(outpval);
	if (inputVal == null || inputVal == "")
	{
		document.getElementById("disclaimer").style.display = "none";
	}
	else 
	{
		if(outpval < 0)
		{
			$('#contact-form').submit(function(event) {
					  event.preventDefault();
					  //$('#feedback').html('');
					  setTimeout(function() {
						// Get data
						var data = {
						  'entry.1569258631': inputVal,
						  'entry.407126866': ''
						  //'entry.1569258631': $('#form-name').val(),
						  //'entry.407126866': $('#form-email').val()
						};

						// Validate form
						var formSuccess = true;

						if (formSuccess) {
						  // Send request
						  $.ajax({
							url: 'https://docs.google.com/forms/d/e/1FAIpQLScT5eahd-me4vPflbwFGIJuRUh0kS_dXFC1Hpu38Lo7i8BKJQ/formResponse',
							type: 'POST',
							crossDomain: true,
							dataType: "xml",
							data: data
						  });
						}
					  }, 300);
					});
					
		}
		else
		{
			$('#contact-form').submit(function(event) {
			  event.preventDefault();
			  //$('#feedback').html('');
			  setTimeout(function() {
				// Get data
				var data = {
				  'entry.1569258631': Englishworddic[outpval],
				  'entry.407126866': Germanworddic[outpval]
				  //'entry.1569258631': $('#form-name').val(),
				  //'entry.407126866': $('#form-email').val()
				};

				// Validate form
				var formSuccess = true;

				if (formSuccess) {
				  // Send request
				  $.ajax({
					url: 'https://docs.google.com/forms/d/e/1FAIpQLScT5eahd-me4vPflbwFGIJuRUh0kS_dXFC1Hpu38Lo7i8BKJQ/formResponse',
					type: 'POST',
					crossDomain: true,
					dataType: "xml",
					data: data
				  });
				}
			  }, 300);
			});
			
		}
	}
	var urlupdval = "?"+inputVal.replace(/\s+/g,"_");;
	/* ends here */
	window.history.pushState({"html":"","pageTitle":""},"", urlupdval);
	//console.log(urlupdval);

	
  var readurl = window.location.href.split('?')[1];
  if (readurl == "" || (typeof readurl === "undefined"))
  {
	  document.getElementById("listtablehide").style.display = "block";
	  //console.log("empty");
  }
  else if (readurl != "" || (typeof readurl !== "undefined"))
  {
	  document.getElementById("listtablehide").style.display = "none";
	  //console.log("not empty");
  }

}
