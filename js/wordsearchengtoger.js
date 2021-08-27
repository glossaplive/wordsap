function engtogerfun() 
{
  var outpval = -1;
 
  
  var inputVal = document.getElementById("myInput").value;
   console.log(inputVal);
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
	//console.log(countriesupp);
	//console.log(inputVal.toUpperCase());
    if(countriesupp == inputVal.toUpperCase())
    {
		outpval=inc;
		console.log(outpval);
		document.getElementById("GermanwordTab1").innerHTML = Germanworddic[outpval];
		document.getElementById("EnglishwordTab1").innerHTML = Englishworddic[outpval];
		document.getElementById("disclaimer").style.display = "none";
		break;
		
		
	}
	
	else
	{
		document.getElementById("GermanwordTab1").innerHTML = "--Nicht verfügbar 😞 --";
		document.getElementById("EnglishwordTab1").innerHTML = "--Not Available 😞 --";		
		document.getElementById("disclaimer").style.display = "block";
	}
  }
	console.log(outpval);
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
}