function startt()
{
	document.getElementById("qa0").style.display = "none";
	document.getElementById("qa1").style.display = "block";
	document.getElementById("scrollq").style.display = "block";
}
var submitcheck = 0;
function opennav(mainid, optionid)
{
	for (i=1;i<=11;i++)
	{
		tempmainid = 'qa'+i;
		tempoptionid = 's'+i;
		//console.log(tempoptionid);
		
		if(tempmainid == mainid)
		{
			document.getElementById(mainid).style.display = 'block';
		}
		else
		{
			document.getElementById(tempmainid).style.display = "none";
		}
		
		if(tempoptionid == optionid)
		{
			document.getElementById(optionid).style.opacity = '1';
		}
		else
		{
			document.getElementById(tempoptionid).style.opacity = '0.5';
		}
		
		if(submitcheck == 0)
		{
			if(tempoptionid == optionid)
			{
				document.getElementById(optionid).style.border = '2px solid #00b7ff';
				document.getElementById(optionid).style.opacity = '1';
			}
			else
			{
				document.getElementById(tempoptionid).style.border = '1px solid grey';
				document.getElementById(tempoptionid).style.opacity = '0.5';
			}
		}
	}
}

function clickoption(getid,getansid,getans)
{
	if(getid.length == 8)
	{
		var tempid =  parseInt(getid.substr(-1));
	}
	else if(getid.length == 9)
	{
		var tempid =  parseInt(getid.substr(-2));
	}
	
	/* enteredanswers[tempid-1] = getid; */
	document.getElementById(getansid).value = getans;
	
	document.getElementById(getid).style.border = "2px solid #00b7ff";
	if(("optiona"+tempid) != getid)
	{
		document.getElementById("optiona"+tempid).style.border = "0.2px solid black";
	}
	if(("optionb"+tempid) != getid)
	{
		document.getElementById("optionb"+tempid).style.border = "0.2px solid black";
	}
	if(("optionc"+tempid) != getid)
	{
		document.getElementById("optionc"+tempid).style.border = "0.2px solid black";
	}
	/* if(("optiond"+tempid) != getid)
	{
		document.getElementById("optiond"+tempid).style.border = "0.2px solid black";
	} */
}