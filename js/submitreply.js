function submittest()
{
	var countans = 0;
	submitcheck = 1;
	enteredanswers = ["-", "-", "-","-", "-", "-","-", "-", "-", "-"];
	for(sai=0;sai<10;sai++)
	{
		incsai = sai+1;
		enteredanswers[sai] = document.getElementById('answer'+incsai).value;
		//console.log(enteredanswers);

	}
	//console.log(correctanswers);

	
	for (j=0;j<10;j++)
	{
		var opta = "optiona"+(j+1);
		var optb = "optionb"+(j+1);
		var optc = "optionc"+(j+1);
		document.getElementById(opta).disabled = true;
		document.getElementById(optb).disabled = true;
		document.getElementById(optc).disabled = true;
		
		k=j+1;
		if(enteredanswers[j] != "")
		{
			if(correctanswers[j] == enteredanswers[j])
			{
				countans = countans + 1;
				//console.log(enteredanswers[j]);
				document.getElementById('option'+enteredanswers[j]+k).style.border = "2px solid #30eb23";
				document.getElementById('s'+k).style.border = "2px solid #30eb23";
			}
			else
			{
				if(enteredanswers[j] != '-')
				{
				document.getElementById('option'+enteredanswers[j]+k).style.border = "2px solid tomato";
				document.getElementById('option'+correctanswers[j]+k).style.border = "2px solid #30eb23";
				document.getElementById('s'+k).style.border = "2px solid tomato";
				}
			}
		}
	}
	
	document.getElementById("counter").setAttribute('data-percent', Math.round(countans*10));
	document.getElementById("progress").style.transform = "rotate("+(countans*36)+"deg)";
	document.getElementById("progressEnd").style.transform = "rotate("+(countans*36)+"deg)";
	
	if ((countans*36) > 180)
	{
		document.getElementById("circlePercent").className = "circlePercent fiftyPlus";
	}
	else
	{
		document.getElementById("circlePercent").className = "circlePercent ";
	}
}