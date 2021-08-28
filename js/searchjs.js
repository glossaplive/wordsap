var similarmatchfull;
function wordsearchs()
{
	  var inputVal = document.getElementById("myInput").value;
	  if (inputVal != null && inputVal != "")
	  {
	document.getElementById("searchtable").style.display = "block";
	document.getElementById("Dicresultsmain").style.display = "block";
	document.getElementById("disclaimer").style.display = "block";
	var getinput1 = document.getElementById("myInput").value;
	if (getinput1 != "" || (typeof getinput1 !== "undefined") )
	{
	document.getElementById("searchtable").style.display = "block";
	
	console.log(getinput1);
	var startsimilar = [];
	var totalsimilar = [];
	var tempflag = 0;
	for(tempt = 0; tempt < Englishworddic.length; tempt++)
	{
		
		if (Englishworddic[tempt].substr(0, getinput1.length).toUpperCase() == getinput1.toUpperCase() && Englishworddic[tempt].toUpperCase() != getinput1.toUpperCase())
			{
			  // startsimilar.push(Englishworddic[tempt]);
			  startsimilar.push([Englishworddic[tempt], Germanworddic[tempt]]);
			}
		else if ((Englishworddic[tempt].indexOf(getinput1) > -1) && (Englishworddic[tempt].substr(0, getinput1.length).toUpperCase() != getinput1.toUpperCase()) && Englishworddic[tempt].toUpperCase() != getinput1.toUpperCase())
			{
			  // totalsimilar.push(Englishworddic[tempt]);
			  totalsimilar.push([Englishworddic[tempt], Germanworddic[tempt]]);
			}
		if(Englishworddic[tempt].toUpperCase() == getinput1.toUpperCase())
		{
			document.getElementById("Dicresultsmain").style.display = "block";
			//document.getElementById("disclaimer").style.display = "block";
			console.log("block");
		}
		else if(tempflag == 0)
		{
			document.getElementById("Dicresultsmain").style.display = "none";
			document.getElementById("disclaimer").style.display = "none";
			console.log("none");
			tempflag = 1;
		}
	}
	for(temptg = 0; temptg < Germanworddic.length; temptg++)
	{
		
		if (Germanworddic[temptg].substr(0, getinput1.length).toUpperCase() == getinput1.toUpperCase() && Germanworddic[temptg].toUpperCase() != getinput1.toUpperCase())
			{
			  // startsimilar.push(Englishworddic[temptg]);
			  startsimilar.push([Englishworddic[temptg], Germanworddic[temptg]]);
			}
		else if ((Germanworddic[temptg].indexOf(getinput1) > -1) && (Germanworddic[temptg].substr(0, getinput1.length).toUpperCase() != getinput1.toUpperCase()) && Germanworddic[temptg].toUpperCase() != getinput1.toUpperCase())
			{
			  // totalsimilar.push(Englishworddic[temptg]);
			  totalsimilar.push([Englishworddic[temptg], Germanworddic[temptg]]);
			}
		if(Germanworddic[temptg].toUpperCase() == getinput1.toUpperCase())
		{
			document.getElementById("Dicresultsmain").style.display = "block";
			//document.getElementById("disclaimer").style.display = "block";
		}
		else if(tempflag == 0)
		{
			document.getElementById("Dicresultsmain").style.display = "none";
			document.getElementById("disclaimer").style.display = "none";
			tempflag = 1;
		}
	}
	totalsimilar.sort();
	similarmatchfull = [];
	console.log(similarmatchfull.length);
	similarmatchfull = startsimilar.concat(totalsimilar);
	console.log(similarmatchfull);
	console.log(similarmatchfull.length);
	if(similarmatchfull.length <= 0)
	{
		document.getElementById("Dicresultsmain").style.display = "block";
		document.getElementById("disclaimer").style.display = "block";
		document.getElementById("searchtable").style.display = "none";
		const d = new Date();
		console.log("non");

		/* 'entry.1900810258': inputVal,
							  'entry.1026800130': "no data" */
							  /* 'entry.1827868109': inputVal,
							  'entry.771353988': "no data" */
		var data = {
		  'entry.1827868109': inputVal,
		  'entry.771353988': d.getDate()+"/"+ d.getMonth()+"/"+d.getFullYear()
		};

		// Validate form
		var formSuccess = true;

		if (formSuccess) 
		{
		  // Send request
		  $.ajax({
			url: 'https://docs.google.com/forms/d/e/1FAIpQLSeU_iWr4SUU11HWxmfnpmoXGDgE75TEvWtkZQ7MMphK7sqZ-g/formResponse',
			type: 'POST',
			crossDomain: true,
			dataType: "xml",
			data: data
		  });
		}
	} 
	
	updatetablea();
	document.getElementById("incdeca").click();
	
	}
	  }
	 else 
	 {
		 document.getElementById("searchtable").style.display = "none";
	 }
}

function myFunctionfirsta()
		{
			document.getElementById("alevel").value = "1";
		}
		function myFunctionlasta()
		{
			var lengthminus1 = similarmatchfull.length - 1;
			var maxvaluecheck = Math.ceil(lengthminus1 / 10);
			document.getElementById("alevel").value = maxvaluecheck;
			
		}
		function myFunctioninca() 
		{
			var lengthminus1 = similarmatchfull.length - 1;
			var maxvaluecheck = Math.ceil(lengthminus1 / 10);
			console.log(maxvaluecheck);
			
			var currval = parseInt(document.getElementById("alevel").value);
			console.log(currval);
			if(currval < maxvaluecheck)
			{
				document.getElementById("alevel").stepUp(1);
				document.getElementById("alevel").value = parseInt(currval)+1;
				console.log(parseInt(currval)+1);
				console.log(currval);
			}
			if(currval == maxvaluecheck -1)
			{
				document.getElementById("inca").style.display="none";
			}
			
			if(startval>=0)
				{
				startval = startval+10;
				endval = endval+10;
				}
			else 
				{
					startval = 0;
					endval = 10;
				}
		}
			function myFunctiondeca() 
			{
				var currval = document.getElementById("alevel").value;
				
				
				if(currval>1)
				{
					document.getElementById("alevel").stepDown(1);
					document.getElementById("inca").style.display="";
				}
				
				if(startval>0)
					{
					startval = startval-10;
					endval = endval-10;
					}
				else 
					{
						startval = 0;
						endval = 10;
					}
			}
			
		/* function ucolor(getuid)
		{
			for(ui = 1;ui <=10; ui++)
			{
				uiid = "pgno"+ui;
				if(uiid == getuid)
				{
					document.getElementById(getuid).style.color = 'Green';
					document.getElementById(getuid).style.fontWeight = "bolder";
					document.getElementById(getuid).style.fontSize = "18px";
				}
				else
				{
					document.getElementById(uiid).style.color = 'black';
					document.getElementById(uiid).style.fontWeight = "normal";
					document.getElementById(uiid).style.fontSize = "16px";
				}
			}
		} */
		arrpi = [];
		var totalleneng;
		/* function incsetvalue()
		{
			var getlenminus = Englishworddic.length - 1;
			totalleneng = Math.ceil(getlenminus / 10);
			var totalpgflag = Math.ceil(totalleneng / 10);
			document.getElementById('pgprevious').style.display = 'inline';
			document.getElementById('pgnext').style.display = 'inline';
			document.getElementById('pgvalinput').value = Number(document.getElementById('pgvalinput').value) + 1;
			var currentpgval = document.getElementById('pgvalinput').value;
			
			
			
			if((Number(currentpgval)) == totalpgflag)
			{
				
				document.getElementById('pgnext').style.display = 'none';
			}
			else
			{
				console.log(123);
				document.getElementById('pgnext').style.display = 'inline';
				// document.getElementById('pgvalinput').value = Number(currentpgval) + 1;
			}
			
			
			
			for (pgi = 1; pgi <= 10; pgi++)
			{
				pgiid = "pgno"+pgi;
				//arr[pgi-1] = Number(document.getElementByid(pgiid).innerHTML)+10;
				pgiincget = document.getElementById(pgiid).innerHTML;
				pgiincval = Number(pgiincget)+10;
				if( pgiincval <= totalleneng)
				{
					document.getElementById(pgiid).style.display = "inline";
					document.getElementById(pgiid).innerHTML = pgiincval;
				}
				else
				{
					document.getElementById(pgiid).style.display = "none";
					document.getElementById(pgiid).innerHTML = pgiincval;
				}
			}
			console.log(totalpgflag);
			console.log(document.getElementById('pgvalinput').value);
			
			document.getElementById("alevel").value = Number(document.getElementById("pgno1").innerHTML);
			ucolor('pgno1');
			displaytablea();updatetablea();
			
		}
		function decsetvalue()
		{
			document.getElementById('pgnext').style.display = 'inline';
			document.getElementById('pgprevious').style.display = 'inline';
			
			
			document.getElementById('pgvalinput').value = Number(document.getElementById('pgvalinput').value) - 1;
			
			for (pgi = 1; pgi <= 10; pgi++)
			{
				pgiid = "pgno"+pgi;
				//arr[pgi-1] = Number(document.getElementByid(pgiid).innerHTML)+10;
				if(Number(document.getElementById(pgiid).innerHTML)-10 >= 1)
				{
					document.getElementById(pgiid).style.display = "inline";
					document.getElementById(pgiid).innerHTML = Number(document.getElementById(pgiid).innerHTML)-10;
				}
				
				else
				{
					document.getElementById('pgprevious').style.display = 'none';
				}
				
				if(document.getElementById('pgno1').innerHTML == '1')
				{
					document.getElementById('pgprevious').style.display = 'none';
				}
				
				
				
			}
			console.log(document.getElementById('pgvalinput').value);
			document.getElementById("alevel").value = Number(document.getElementById("pgno10").innerHTML);
			ucolor('pgno10');
			displaytablea();updatetablea();
		} */
		/* function sendval(getpgnoid)
		{
			pgnoidval = Number(document.getElementById(getpgnoid).innerHTML);
			document.getElementById('alevel').value = pgnoidval;
		} */
		function updatetablea()
		{
		var n = 0;
		var table = document.getElementById("TableLista");
			var getinputval = document.getElementById("alevel").value;
			
			var lengthminus1 = similarmatchfull.length - 1;
			//var tableindexval = lengthminus1 - ((getinputval - 1) * 10);
			var tableindexval = (getinputval - 1) * 10;
			//var startval = ((Math.ceil(lengthminus1 / 10))*10) - 11;
			var startval = ((getinputval - 1) * 10);
			var endval = ((getinputval - 1) * 10)+10;
			document.getElementById("getpgno").style.display="block";
			if (Math.ceil(lengthminus1 / 10) <= 1)
			{
				document.getElementById("getpgno").style.display="none";
			}
			
			document.getElementById("totalpagesdispa").innerHTML = " of " + Math.ceil(lengthminus1 / 10);
			
			
				for (var i = startval; i < endval; i++)
				{
/* 					console.log(startval);
					console.log(endval);
					console.log(tableindexval); */
					if(tableindexval <= similarmatchfull.length -1)
					{
						if (typeof(similarmatchfull[tableindexval][0]) != 'undefined') 
						{
						
							var idgenrowcol1 = "rowa".concat(n+1,"col1");
							document.getElementById(idgenrowcol1).innerHTML = i + 1;
							var idgenrow1 = "rowa".concat(n+1);
							document.getElementById(idgenrow1).style.display="";
							
							var idgenrowcol2 = "rowa".concat(n+1,"col2");
							document.getElementById(idgenrowcol2).innerHTML = similarmatchfull[tableindexval][0];										
							
							var idgenrowcol3 = "rowa".concat(n+1,"col3");
							document.getElementById(idgenrowcol3).innerHTML = similarmatchfull[tableindexval][1];
							//tableindexval = tableindexval - 1;
							
							tableindexval = tableindexval + 1;
							n = n+1;
						}
						else
						{
							var idgenrowcol1 = "rowa".concat(n+1,"col1");
							document.getElementById(idgenrowcol1).innerHTML = "";
							
							var idgenrowcol2 = "rowa".concat(n+1,"col2");
							document.getElementById(idgenrowcol2).innerHTML = "";					
							
							var idgenrowcol3 = "rowa".concat(n+1,"col3");
							document.getElementById(idgenrowcol3).innerHTML = "";
							//tableindexval = tableindexval - 1;
							tableindexval = tableindexval + 1;
							n = n+1;
						}
					}
				}
			//document.getElementById("incdeca1").click();
		}
	function firstFunctiona()
		{
			var startval = 0;
			var endval = 10;
			var n = 0;
				var table = document.getElementById("TableLista");
				var getinputval = document.getElementById("alevel").value
				var lengthminus1 = similarmatchfull.length - 1;
				//var tableindexval = lengthminus1 - ((getinputval - 1) * 10);
				var tableindexval = (getinputval - 1) * 10;
				document.getElementById("totalpagesdispa").innerHTML = " of " + Math.ceil(lengthminus1 / 10);
				
					for (var i = startval; i < endval; i++)
					{

						if (typeof(similarmatchfull[tableindexval][0]) != 'undefined') 
						{
						
							var idgenrowcol1 = "rowa".concat(n+1,"col1");
							document.getElementById(idgenrowcol1).innerHTML = i + 1;
							var idgenrow1 = "rowa".concat(n+1);
							document.getElementById(idgenrow1).style.display="";
							
							var idgenrowcol2 = "rowa".concat(n+1,"col2");
							document.getElementById(idgenrowcol2).innerHTML = similarmatchfull[tableindexval][0];										
							
							var idgenrowcol3 = "rowa".concat(n+1,"col3");
							document.getElementById(idgenrowcol3).innerHTML = similarmatchfull[tableindexval][1];
							tableindexval = tableindexval + 1;
							n = n+1;
							document.getElementById("inca").style.display="";
						}
						else
						{
							var idgenrowcol1 = "rowa".concat(n+1,"col1");
							document.getElementById(idgenrowcol1).innerHTML = "";
							
							var idgenrowcol2 = "rowa".concat(n+1,"col2");
							document.getElementById(idgenrowcol2).innerHTML = "";					
							
							var idgenrowcol3 = "rowa".concat(n+1,"col3");
							document.getElementById(idgenrowcol3).innerHTML = "";
							tableindexval = tableindexval + 1;
							n = n+1;
							document.getElementById("inca").style.display="";
						}
					}
		}
		function lastfunctiona()
		{
		
		var n = 0;
		var table = document.getElementById("TableLista");
			var getinputval = document.getElementById("alevel").value

			var lengthminus1 = similarmatchfull.length - 1;
			//var tableindexval = lengthminus1 - ((getinputval - 1) * 10);
			var tableindexval = (getinputval - 1) * 10;
			var startval = ((Math.ceil(lengthminus1 / 10))*10) - 11;
			var endval = (Math.ceil(lengthminus1 / 10))*10;
			document.getElementById("totalpagesdispa").innerHTML = " of " + Math.ceil(lengthminus1 / 10);
			
				for (var i = startval; i < endval; i++)
				{
					
					if (typeof(similarmatchfull[tableindexval][0]) != 'undefined') 
					{
					
						var idgenrowcol1 = "rowa".concat(n+1,"col1");
						console.log(idgenrowcol1);
						document.getElementById(idgenrowcol1).innerHTML = i + 2;
						var idgenrow1 = "rowa".concat(n+1);
						document.getElementById(idgenrow1).style.display="";
						
						var idgenrowcol2 = "rowa".concat(n+1,"col2");
						document.getElementById(idgenrowcol2).innerHTML = similarmatchfull[tableindexval][0];										
						
						var idgenrowcol3 = "rowa".concat(n+1,"col3");
						document.getElementById(idgenrowcol3).innerHTML = similarmatchfull[tableindexval][1];
						tableindexval = tableindexval + 1;
						n = n+1;
						document.getElementById("inca").style.display="none";
					}
					else
					{
						var idgenrowcol1 = "rowa".concat(n+1,"col1");
						document.getElementById(idgenrowcol1).innerHTML = "";
						var idgenrowcol2 = "rowa".concat(n+1,"col2");
						document.getElementById(idgenrowcol2).innerHTML = "";					
						
						var idgenrowcol3 = "rowa".concat(n+1,"col3");
						document.getElementById(idgenrowcol3).innerHTML = "";
						tableindexval = tableindexval + 1;
						n = n+1;
						document.getElementById("inca").style.display="none";
					}
				}
		}
		var startval = 0;
		var endval = 10;
		var n = 0;
			var table = document.getElementById("TableLista");
			var getinputval = document.getElementById("alevel").value;
			var getinputvaltemp = document.getElementById("myInput").value;
			
			if (getinputvaltemp != "")
			{
				var lengthminus1 = similarmatchfull.length - 1;
			}
			var lengthminus1 = 0;
			//var tableindexval = lengthminus1 - ((getinputval - 1) * 10);
			var tableindexval = (getinputval - 1) * 10;
			document.getElementById("totalpagesdispa").innerHTML = " of " + Math.ceil(lengthminus1 / 10);
			
				for (var i = startval; i < endval; i++)
				{
					if (getinputvaltemp != "")
					{

					if (typeof(similarmatchfull[tableindexval][0]) != 'undefined') 
					{
						
						var idgenrowcol1 = "rowa".concat(n+1,"col1");
						document.getElementById(idgenrowcol1).innerHTML = i + 1;
						var idgenrow1 = "rowa".concat(n+1);
						document.getElementById(idgenrow1).style.display="";
						
						var idgenrowcol2 = "rowa".concat(n+1,"col2");
						document.getElementById(idgenrowcol2).innerHTML = similarmatchfull[tableindexval][0];					
						
						var idgenrowcol3 = "rowa".concat(n+1,"col3");
						document.getElementById(idgenrowcol3).innerHTML = similarmatchfull[tableindexval][1];
						
						tableindexval = tableindexval + 1;
						n = n+1;
						
					}
					else
					{
						var idgenrowcol1 = "rowa".concat(n+1,"col1");
						document.getElementById(idgenrowcol1).innerHTML = "";

						
						var idgenrowcol2 = "rowa".concat(n+1,"col2");
						document.getElementById(idgenrowcol2).innerHTML = "";						
						
						var idgenrowcol3 = "rowa".concat(n+1,"col3");
						document.getElementById(idgenrowcol3).innerHTML = "";
						tableindexval = tableindexval + 1;
						n = n+1;
					}
					}
				}