/**
 * main.js
 * This file contains code that runs on load for index.html
 */

// TODO: Write the function displayLockers
function displayLockers(data)
{
	let output = "";
	for ( let i = 0; i < data._lockers.length; i++ )
	{
		output += "<div class=\"mdl-cell mdl-cell--4-col\">";
		output += "<div class=\"mdl-card mdl-shadow--2dp locker\"";
		output += "style=\"background-color:#"+data._lockers[i]._color+"\"><br>";
		output += "<div class=\"mdl-card__title mdl-card--expand\">";
		output += "<h2>"+data._lockers[i]._id+"</h2>";
		output += "<h4>&nbsp;"+data._lockers[i]._label+"</h4>";
		output += "</div>" + "<div class=\"mdl-card__actions mdl-card--border\">";
		output += "<a class=\"mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect\" onclick=\"view("+i+")\">Open Locker</a>";
		output += "<div class=\"mdl-layout-spacer\"></div>";
		output += "<i class=\"material-icons\">";
    if (data._lockers[i]._locked == true) {
      output += "lock";
    }
    else {
      output += "lock_open";
    }
		output += "</i></div></div></div>";

	}
	let outputref = document.getElementById("lockerDisplay");
	outputref.innerHTML = output;
}

// TODO: Write the function addNewLocker
function addNewLocker()
{
  let id = prompt("ENTER ID");
	lockers.addLocker(id); // add Locker

	updateLocalStorage(lockers);
  displayLockers(lockers);
}

// TODO: Write the function view
function view(index)
{
	let stringedIndex = JSON.stringify(index);
	localStorage.setItem(LOCKER_INDEX_KEY, stringedIndex);

	// Directing page
	window.location = "view.html";
}

// TODO: Write the code that will run on load here
displayLockers(lockers);
