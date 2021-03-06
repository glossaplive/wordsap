function autocomplete(inp, arr) {
  /*the autocomplete function takes two arguments,
  the text field element and an array of possible autocompleted values:*/
  var currentFocus;
 var defaultvalinp;
  /*execute a function when someone writes in the text field:*/
  inp.addEventListener("input", function(e) {
      var a, b, i, val = this.value;
	   defaultvalinp = document.getElementById("myInput").value;
  console.log(defaultvalinp);
      /*close any already open lists of autocompleted values*/
      closeAllLists();
      if (!val) { return false;}
      currentFocus = -1;
      /*create a DIV element that will contain the items (values):*/
      a = document.createElement("DIV");
      a.setAttribute("id", this.id + "autocomplete-list");
      a.setAttribute("class", "autocomplete-items");
      a.setAttribute('onclick','engtogerfun()');
      /*append the DIV element as a child of the autocomplete container:*/
      this.parentNode.appendChild(a);
      /*for each item in the array...*/
	  
	  var itemp = 0;
	  var jtemp = 0;
	  var englishdictsearchjs = [];
	  var germandictsearchjs = [];
	  var englishdictindexsearchjs = [];
	  var germandictindexsearchjs = [];
	  
      for (i = 0; i < arr.length; i++) 
	  {
		/* console.log(arr[i].substr(0, val.length).toUpperCase());
		console.log(val); */
		
        /*check if the item starts with the same letters as the text field value:*/
        if (arr[i].substr(0, val.length).toUpperCase() == val.toUpperCase() && itemp < 4) 
		{
			/* englishdictsearchjs.push(Englishworddic[i]);
			englishdictindexsearchjs.push(i);
			germandictsearchjs.push(Germanworddic[i-(Englishworddic.length)]);
			germandictindexsearchjs.push(i); */
			
			//console.log('lesser than 4');
			//console.log(englishdictsearchjs);
          /*create a DIV element for each matching element:*/
          b = document.createElement("DIV");
          /*make the matching letters bold:*/
		  if(i < Englishworddic.length)
		  {
          b.innerHTML = "<i>EN &nbsp</i>"+"<strong>" + arr[i].substr(0, val.length) + "</strong>";
          b.innerHTML += arr[i].substr(val.length);
          /*insert a input field that will hold the current array item's value:*/
          b.innerHTML += "<input type='hidden' value='" + arr[i] + "'>";
		  }
		  else 
		 {
          b.innerHTML = "<i>DE &nbsp</i>"+"<strong>" + arr[i].substr(0, val.length) + "</strong>";
          b.innerHTML += arr[i].substr(val.length);
          /*insert a input field that will hold the current array item's value:*/
          b.innerHTML += "<input type='hidden' value='" + arr[i] + "'>";
		  }  
		  itemp = itemp +1;
		  b.setAttribute("style", "text-align:left");
		  
		  b.addEventListener("keydown", function (e) {
				if (e.keyCode === 13) 
				{  //checks whether the pressed key is "Enter"
					inp.value = this.getElementsByTagName("input")[0].value;
					wordsearchs();
					
				}
			});
		  //b.addEventListener("keydown", wordsearchs, false);
          /*execute a function when someone clicks on the item value (DIV element):*/
          b.addEventListener("click", function(e) {
              /*insert the value for the autocomplete text field:*/
              inp.value = this.getElementsByTagName("input")[0].value;
              /*close the list of autocompleted values,
              (or any other open lists of autocompleted values:*/
              closeAllLists();
          });
		  b.addEventListener("click", wordsearchs, false);
		  
          a.appendChild(b);
        }
		else if (arr[i].substr(0, val.length).toUpperCase() == val.toUpperCase() && itemp >= 4 && jtemp < 1) 
		{
			englishdictsearchjs.push(Englishworddic[i]);
			jtemp = jtemp +1;
			//console.log('greater4');
          /*create a DIV element for each matching element:*/
          c = document.createElement("DIV");
          /*insert a input field that will hold the current array item's value:*/
          c.innerHTML = "more";
		  c.setAttribute("style", "text-align:left");
		  c.addEventListener("click", wordsearchs, false);
		  
          c.addEventListener("click", function(e) 
		  {
              /*insert the value for the autocomplete text field:*/
              //inp.value = this.getElementsByTagName("input")[0].value;
              /*close the list of autocompleted values,
              (or any other open lists of autocompleted values:*/
              closeAllLists();
          });
          a.appendChild(c);
        }
		/* console.log(englishdictsearchjs);
		console.log(germandictsearchjs); */
      }
  });
  
  /*execute a function presses a key on the keyboard:*/
  inp.addEventListener("keydown", function(e) {
      var x = document.getElementById(this.id + "autocomplete-list");
	  
      if (x) x = x.getElementsByTagName("div");
      if (e.keyCode == 40) {
        /*If the arrow DOWN key is pressed,
        increase the currentFocus variable:*/
        currentFocus++;
        /*and and make the current item more visible:*/
        addActive(x);
      } else if (e.keyCode == 38) { //up
        /*If the arrow UP key is pressed,
        decrease the currentFocus variable:*/
        currentFocus--;
        /*and and make the current item more visible:*/
        addActive(x);
      } else if (e.keyCode == 13) {
        /*If the ENTER key is pressed, prevent the form from being submitted,*/
        //e.preventDefault();
        if (currentFocus > -1) {
          /*and simulate a click on the "active" item:*/
          if (x) x[currentFocus].click();
        }
      }
  });
  
  function addActive(x) {
    /*a function to classify an item as "active":*/
	
    if (!x) return false;
    /*start by removing the "active" class on all items:*/
    removeActive(x);
    if (currentFocus >= x.length) currentFocus = 0;
    if (currentFocus < 0) currentFocus = (x.length - 1);
    /*add class "autocomplete-active":*/
    x[currentFocus].classList.add("autocomplete-active");
	
	var currval1 = x[currentFocus].innerHTML;
	var currval2 = currval1.substring(currval1.indexOf('value="') + 7);
	console.log(currval2.slice(0, -2));
	
	if (currval2.slice(0, -2) == null || currval2.slice(0, -2) == '')
	{
		document.getElementById("myInput").value = defaultvalinp;
	}
	else 
	{
		document.getElementById("myInput").value = currval2.slice(0, -2);
	}
	
  }
  function removeActive(x) {
    /*a function to remove the "active" class from all autocomplete items:*/
    for (var i = 0; i < x.length; i++) {
      x[i].classList.remove("autocomplete-active");
    }
  }
  function closeAllLists(elmnt) {
    /*close all autocomplete lists in the document,
    except the one passed as an argument:*/
	
    var x = document.getElementsByClassName("autocomplete-items");
    for (var i = 0; i < x.length; i++) {
      if (elmnt != x[i] && elmnt != inp) {
        x[i].parentNode.removeChild(x[i]);
      }
    }
  }
  /*execute a function when someone clicks in the document:*/
  document.addEventListener("click", function (e) {
      closeAllLists(e.target);
  });
}
