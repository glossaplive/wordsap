function myFunctionfirst()
		{
			document.getElementById("myLevel").value = "1";
		}
		function myFunctionlast()
		{
			var lengthminus1 = Englishworddic.length - 1;
			var maxvaluecheck = Math.ceil(lengthminus1 / 10);
			document.getElementById("myLevel").value = maxvaluecheck;
			
		}
		function myFunctioninc() 
		{
			var lengthminus1 = Englishworddic.length - 1;
			var maxvaluecheck = Math.ceil(lengthminus1 / 10);
			var currval = document.getElementById("myLevel").value;

			if(currval<maxvaluecheck)
			{
				document.getElementById("myLevel").stepUp(1);
			}
			if(currval == maxvaluecheck -1)
			{
				document.getElementById("inc").style.display="none";
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
			function myFunctiondec() 
			{
				var currval = document.getElementById("myLevel").value;
				
				
				if(currval>1)
				{
					document.getElementById("myLevel").stepDown(1);
					document.getElementById("inc").style.display="";
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
			
		function ucolor(getuid)
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
		}
		arrpi = [];
		var totalleneng;
		function incsetvalue()
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
			
			document.getElementById("myLevel").value = Number(document.getElementById("pgno1").innerHTML);
			ucolor('pgno1');
			displaytable();updatetable();
			
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
			document.getElementById("myLevel").value = Number(document.getElementById("pgno10").innerHTML);
			ucolor('pgno10');
			displaytable();updatetable();
		}
		function sendval(getpgnoid)
		{
			pgnoidval = Number(document.getElementById(getpgnoid).innerHTML);
			document.getElementById('myLevel').value = pgnoidval;
		}
		function updatetable()
		{
		var n = 0;
		var table = document.getElementById("TableList");
			var getinputval = document.getElementById("myLevel").value
			
			var lengthminus1 = Englishworddic.length - 1;
			var tableindexval = lengthminus1 - ((getinputval - 1) * 10);
			//var startval = ((Math.ceil(lengthminus1 / 10))*10) - 11;
			var startval = ((getinputval - 1) * 10);
			var endval = ((getinputval - 1) * 10)+10;
			document.getElementById("totalpagesdisp").innerHTML = " of " + Math.ceil(lengthminus1 / 10);
			
				for (var i = startval; i < endval; i++)
				{
					
					if (typeof(Englishworddic[tableindexval]) != 'undefined') 
					{
					
						var idgenrowcol1 = "row".concat(n+1,"col1");
						document.getElementById(idgenrowcol1).innerHTML = i + 1;
						var idgenrow1 = "row".concat(n+1);
						document.getElementById(idgenrow1).style.display="";
						
						var idgenrowcol2 = "row".concat(n+1,"col2");
						document.getElementById(idgenrowcol2).innerHTML = Englishworddic[tableindexval];										
						
						var idgenrowcol3 = "row".concat(n+1,"col3");
						document.getElementById(idgenrowcol3).innerHTML = Germanworddic[tableindexval];
						tableindexval = tableindexval - 1;
						n = n+1;
					}
					else
					{
						var idgenrowcol1 = "row".concat(n+1,"col1");
						document.getElementById(idgenrowcol1).innerHTML = "";
						
						var idgenrowcol2 = "row".concat(n+1,"col2");
						document.getElementById(idgenrowcol2).innerHTML = "";					
						
						var idgenrowcol3 = "row".concat(n+1,"col3");
						document.getElementById(idgenrowcol3).innerHTML = "";
						tableindexval = tableindexval - 1;
						n = n+1;
					}
				}
		}
	function firstFunction()
		{
			var startval = 0;
			var endval = 10;
			var n = 0;
				var table = document.getElementById("TableList");
				var getinputval = document.getElementById("myLevel").value
				var lengthminus1 = Englishworddic.length - 1;
				var tableindexval = lengthminus1 - ((getinputval - 1) * 10);
				document.getElementById("totalpagesdisp").innerHTML = " of " + Math.ceil(lengthminus1 / 10);
				
					for (var i = startval; i < endval; i++)
					{

						if (typeof(Englishworddic[tableindexval]) != 'undefined') 
						{
						
							var idgenrowcol1 = "row".concat(n+1,"col1");
							document.getElementById(idgenrowcol1).innerHTML = i + 1;
							var idgenrow1 = "row".concat(n+1);
							document.getElementById(idgenrow1).style.display="";
							
							var idgenrowcol2 = "row".concat(n+1,"col2");
							document.getElementById(idgenrowcol2).innerHTML = Englishworddic[tableindexval];										
							
							var idgenrowcol3 = "row".concat(n+1,"col3");
							document.getElementById(idgenrowcol3).innerHTML = Germanworddic[tableindexval];
							tableindexval = tableindexval - 1;
							n = n+1;
							document.getElementById("inc").style.display="";
						}
						else
						{
							var idgenrowcol1 = "row".concat(n+1,"col1");
							document.getElementById(idgenrowcol1).innerHTML = "";
							
							var idgenrowcol2 = "row".concat(n+1,"col2");
							document.getElementById(idgenrowcol2).innerHTML = "";					
							
							var idgenrowcol3 = "row".concat(n+1,"col3");
							document.getElementById(idgenrowcol3).innerHTML = "";
							tableindexval = tableindexval - 1;
							n = n+1;
							document.getElementById("inc").style.display="";
						}
					}
		}
		function lastfunction()
		{
		
		var n = 0;
		var table = document.getElementById("TableList");
			var getinputval = document.getElementById("myLevel").value

			var lengthminus1 = Englishworddic.length - 1;
			var tableindexval = lengthminus1 - ((getinputval - 1) * 10);
			var startval = ((Math.ceil(lengthminus1 / 10))*10) - 11;
			var endval = (Math.ceil(lengthminus1 / 10))*10;
			document.getElementById("totalpagesdisp").innerHTML = " of " + Math.ceil(lengthminus1 / 10);
			
				for (var i = startval; i < endval; i++)
				{
					
					if (typeof(Englishworddic[tableindexval]) != 'undefined') 
					{
					
						var idgenrowcol1 = "row".concat(n+1,"col1");
						document.getElementById(idgenrowcol1).innerHTML = i + 2;
						var idgenrow1 = "row".concat(n+1);
						document.getElementById(idgenrow1).style.display="";
						
						var idgenrowcol2 = "row".concat(n+1,"col2");
						document.getElementById(idgenrowcol2).innerHTML = Englishworddic[tableindexval];										
						
						var idgenrowcol3 = "row".concat(n+1,"col3");
						document.getElementById(idgenrowcol3).innerHTML = Germanworddic[tableindexval];
						tableindexval = tableindexval - 1;
						n = n+1;
						document.getElementById("inc").style.display="none";
					}
					else
					{
						var idgenrowcol1 = "row".concat(n+1,"col1");
						document.getElementById(idgenrowcol1).innerHTML = "";
						var idgenrowcol2 = "row".concat(n+1,"col2");
						document.getElementById(idgenrowcol2).innerHTML = "";					
						
						var idgenrowcol3 = "row".concat(n+1,"col3");
						document.getElementById(idgenrowcol3).innerHTML = "";
						tableindexval = tableindexval - 1;
						n = n+1;
						document.getElementById("inc").style.display="none";
					}
				}
		}
		var startval = 0;
		var endval = 10;
		var n = 0;
			var table = document.getElementById("TableList");
			var getinputval = document.getElementById("myLevel").value
			var lengthminus1 = Englishworddic.length - 1;
			var tableindexval = lengthminus1 - ((getinputval - 1) * 10);
			document.getElementById("totalpagesdisp").innerHTML = " of " + Math.ceil(lengthminus1 / 10);
			
				for (var i = startval; i < endval; i++)
				{

					if (typeof(Englishworddic[tableindexval]) != 'undefined') 
					{
						
						var idgenrowcol1 = "row".concat(n+1,"col1");
						document.getElementById(idgenrowcol1).innerHTML = i + 1;
						var idgenrow1 = "row".concat(n+1);
						document.getElementById(idgenrow1).style.display="";
						
						var idgenrowcol2 = "row".concat(n+1,"col2");
						document.getElementById(idgenrowcol2).innerHTML = Englishworddic[tableindexval];					
						
						var idgenrowcol3 = "row".concat(n+1,"col3");
						document.getElementById(idgenrowcol3).innerHTML = Germanworddic[tableindexval];
						
						tableindexval = tableindexval - 1;
						n = n+1;
					}
					else
					{
						var idgenrowcol1 = "row".concat(n+1,"col1");
						document.getElementById(idgenrowcol1).innerHTML = "";

						
						var idgenrowcol2 = "row".concat(n+1,"col2");
						document.getElementById(idgenrowcol2).innerHTML = "";						
						
						var idgenrowcol3 = "row".concat(n+1,"col3");
						document.getElementById(idgenrowcol3).innerHTML = "";
						tableindexval = tableindexval - 1;
						n = n+1;
					}
				}