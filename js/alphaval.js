alphaarr1 = [];
alphaindex1 = [];
galphaarr1 = [];
galphaindex1 = [];
const element = document.getElementById("enggermantable");

function getalpha(getalphabet)
{
	
	document.getElementById("listtablehide").style.display = "none";
	for (alphait = 0;alphait < Englishworddic.length; alphait++)
	{
		stralpha= Englishworddic[alphait];
		if(stralpha.substring(0, 1).toUpperCase() == getalphabet.toUpperCase())
		{
		alphaarr1.push(stralpha);
		alphaindex1.push(alphait);
		}
	}
	alphaarr1.sort();
	console.log(alphaarr1);
	console.log(alphaindex1);
	
	if(alphaindex1.length == 0)
	{
		alpharowmodul = 1;
		const para = document.createElement("p");
		const node = document.createTextNode("Sorry, there is no English word that starts with "+ getalphabet.toUpperCase());
		para.appendChild(node);
const element = document.getElementById("enggermantable");
		element.appendChild(para);
			ggetalpha(getalphabet);
	}
	else
	{
		
		const para = document.createElement("p");
		const node = document.createTextNode("English words that start with "+ getalphabet.toUpperCase());
		const para1 = document.createElement("p");
		const node1 = document.createTextNode("Attention: Some big words might be trimmed, Click on that to expand");
		para1.setAttribute("style", "font-size:12px;");
		para.appendChild(node);
		para1.appendChild(node1);
		const element = document.getElementById("enggermantable");
		element.appendChild(para);
		element.appendChild(para1);
		
		generate_table(getalphabet);
	}

	
}


var colalpha = 4;
var curalpha = 0;

var alpharowmodul = 1;
function generate_table(egetalphabet) 
{
	
	var alpharow = Math.ceil((alphaindex1.length)/4);
	if(alphaindex1.length == 1)
	{
		alpharowmodul = 1;
	}
	else if(alphaindex1.length == 2)
	{
		alpharowmodul = 2;
	}
	else if(alphaindex1.length == 3)
	{
		alpharowmodul = 3;
	}
	else if(alphaindex1.length == 4)
	{
		alpharowmodul = 4;
	}
	else
	{
	var alpharowmodul = Math.ceil((alphaindex1.length)%4);
	console.log('4');
	}
	console.log(alphaindex1.length);
	console.log(alpharow);
	console.log(alpharowmodul);
	
  // get the reference for the body
  var body = document.getElementsByTagName("body")[0];

  // creates a <table> element and a <tbody> element
  var tbl = document.createElement("table");
  var tblBody = document.createElement("tbody");
  

  // creating all cells
  for (var i = 0; i < alpharow; i++) {
    // creates a table row
	if(i==(alpharow-1))
	{
		colalpha = alpharowmodul;
	}
    var row = document.createElement("tr");
	
    for (var j = 0; j < colalpha; j++) {
      // Create a <td> element and a text node, make the text
      // node the contents of the <td>, and put the <td> at
      // the end of the table row

      var cell = document.createElement("td");
      var cellText = document.createTextNode(alphaarr1[curalpha]);
      
      cell.appendChild(cellText);
	  var updatesearchval = "updatesearch('"+alphaarr1[curalpha]+"')";
	  console.log(updatesearchval);
      cell.setAttribute('onclick', updatesearchval);
      cell.setAttribute("style", "color:black; border:1px solid grey; font-size:13px; cursor:pointer; width:25%; overflow: hidden;");
	  var hypercell = "https://engineerthoughts.com/dict/index?"+alphaarr1[curalpha]

      row.appendChild(cell);
	  curalpha = curalpha +1;
    }
	
    // add the row to the end of the table body
    tblBody.appendChild(row);
  }

  // put the <tbody> in the <table>
  tbl.appendChild(tblBody);
  // appends <table> into <body>
  const element = document.getElementById("enggermantable");
    element.appendChild(tbl);
  //body.appendChild(tbl);
  // sets the border attribute of tbl to 2;
  tbl.setAttribute("width", "90%");
  tbl.setAttribute("align", "center");
  tbl.setAttribute("style", "table-layout: fixed;");

  	ggetalpha(egetalphabet);

}

function ggetalpha(ggetalphabet)
{
for (galphait = 0;galphait < Germanworddic.length; galphait++)
	{
		gstralpha= Germanworddic[galphait];
		
		if(gstralpha.substring(0, 1).toUpperCase() == ggetalphabet.toUpperCase())
		{
			console.log(gstralpha);
		galphaarr1.push(gstralpha);
		galphaindex1.push(galphait);
		}
	}
	galphaarr1.sort();
	console.log(galphaarr1);
	console.log(galphaindex1);
	
	if(galphaindex1.length == 0)
	{
		galpharowmodul = 1;
		const para = document.createElement("p");
		const node = document.createTextNode("Sorry, there is no German word that starts with "+ ggetalphabet.toUpperCase());
		para.appendChild(node);
		const element = document.getElementById("enggermantable");
		element.appendChild(para);
	}
	else
	{
		const para = document.createElement("p");
		const node = document.createTextNode("German words that start with "+ ggetalphabet.toUpperCase());
		para.appendChild(node);
		const para1 = document.createElement("p");
		const node1 = document.createTextNode("Attention: Some big words might be trimmed, Click on that to expand");
		para1.setAttribute("style", "font-size:12px;");
		para1.appendChild(node1);
		const element = document.getElementById("enggermantable");
		element.appendChild(para);
		element.appendChild(para1);
		generate_tableg();
	}
}


var gcolalpha = 4;
var gcuralpha = 0;
var galpharowmodul = 1;

function generate_tableg() 
{
	
	var galpharow = Math.ceil((galphaindex1.length)/4);
	if(galphaindex1.length == 1)
	{
		galpharowmodul = 1;
	}
	else if(galphaindex1.length == 2)
	{
		galpharowmodul = 2;
	}
	else if(galphaindex1.length == 3)
	{
		galpharowmodul = 3;
	}
	else if(galphaindex1.length == 4)
	{
		galpharowmodul = 4;
	}
	else
	{
	var galpharowmodul = Math.ceil((galphaindex1.length)%4);
	console.log('4');
	}
	console.log(galphaindex1.length);
	console.log(galpharow);
	console.log(galpharowmodul);
	
  // get the reference for the body
  var body = document.getElementsByTagName("body")[0];

  // creates a <table> element and a <tbody> element
  var gtbl = document.createElement("table");
  var gtblBody = document.createElement("tbody");
  

  // creating all cells
  for (var i = 0; i < galpharow; i++) {
    // creates a table row
	if(i==(galpharow-1))
	{
		gcolalpha = galpharowmodul;
	}
    var row = document.createElement("tr");
	
    for (var j = 0; j < gcolalpha; j++) {
      // Create a <td> element and a text node, make the text
      // node the contents of the <td>, and put the <td> at
      // the end of the table row

      var cell = document.createElement("td");
      var cellText = document.createTextNode(galphaarr1[gcuralpha]);
      
      cell.appendChild(cellText);
	  var updatesearchval = "updatesearch('"+galphaarr1[gcuralpha]+"')";
	  console.log(updatesearchval);
      cell.setAttribute('onclick', updatesearchval);
      cell.setAttribute("style", "color:black; border:1px solid grey; font-size:13px; cursor:pointer; width:25%; overflow: hidden;");
	  var hypercell = "https://engineerthoughts.com/dict/index?"+galphaarr1[gcuralpha]

      row.appendChild(cell);
	  gcuralpha = gcuralpha +1;
    }
	
    // add the row to the end of the table body
    gtblBody.appendChild(row);
  }

  // put the <tbody> in the <table>
  gtbl.appendChild(gtblBody);
  const element = document.getElementById("enggermantable");
  element.appendChild(gtbl);
  // appends <table> into <body>
  //body.appendChild(gtbl);
  // sets the border attribute of tbl to 2;
  gtbl.setAttribute("width", "90%");
  gtbl.setAttribute("align", "center");
  gtbl.setAttribute("style", "table-layout: fixed;");
  

}
function updatesearch(getval123)
{
	document.getElementById("myInput").value = getval123;
	
	engtogerfun();
}
