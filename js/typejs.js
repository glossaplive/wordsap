function typevalue(getval)
{
	var typeval = document.getElementById("myInput").value;
	typeval = typeval+getval;
	document.getElementById("myInput").value = typeval;
}