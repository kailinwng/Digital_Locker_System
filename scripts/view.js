/**
 * view.js
 * This file contains code that runs on load for view.html
 */

// TODO: Write the function displayLockerInfo
function displayLockerInfo(locker)
{
  // Getting Element IDs
	let idRef = document.getElementById("lockerId");
  let labelRef = document.getElementById("lockerLabel");
  let colorRef = document.getElementById("lockerColor")
  let contentRef = document.getElementById("lockerContents");
  // Display ID
  idRef.innerHTML = locker.id;
  // Display contents
  if (locker.contents != "") {
    contentRef.value = locker.contents;
  }
  // Display Label
  if (locker.label != "") {
    labelRef.value = locker.label;
  }
  // Display Color
  if (locker.color == "FFFFFF") {
    colorRef.value = "3399ff";
  }
  else {
    colorRef.value = locker.color;
  }
}
// TODO: Write the function unlock
function unlock(locker)
{
	let pin = prompt("ENTER PIN");

	if ( pin == locker.pin )
	{
		locker.locked = false;
		locker.pin = "";
		displayLockerInfo(locker);
	}
	else
	{
		window.location = "index.HTML";
	}

}
// TODO: Write the function deleteThisLocker
function deleteThisLocker()
{
	// Confirm with the user
	if (confirm("Are you sure?"))
	{
    // Call lockerList to remove locker
    lockers.removeLocker(locker.id);
    // Updating Local Storage
		updateLocalStorage(lockers);
    // Inform user that selected locker is deleted
    alert("Deleted Locker");
    // redirecting to main page
		window.location = "index.HTML";
	}
}
// TODO: Write the function lockLocker
function lockLocker()
{
  // Confirm with the user
	if (confirm("Lock Locker?"))
	{
		let pin1 = prompt("ENTER PIN");
		let pin2 = prompt("ENTER PIN AGAIN");
    // Validating Pin
		if ( pin1 == pin2 )
		{
      // Update locker data
			let label = document.getElementById("lockerLabel").value;
			let color = document.getElementById("lockerColor").value;
			let contents = document.getElementById("lockerContents").value;
			lockers._lockers[index].pin = pin1;
			lockers._lockers[index].locked = true;
			lockers._lockers[index].label = label;
			lockers._lockers[index].color = color;
			lockers._lockers[index].contents = contents;
      // Updating Local Storage
			updateLocalStorage(lockers);
      // Inform user that locker is now locked
			alert("Locked Locker");
      // redirecting back to main page
			window.location = "index.HTML";
		}
		else
		{
      // Error if pin doesn't match
			alert("ERROR! PIN DOESN'T MATCH");
		}
	}
}

// TODO: Write the function closeLocker
function closeLocker()
{
  // Confirm with the user
	if (confirm("Close locker without locking?"))
	{
    // Updating locker info
		let label = document.getElementById("lockerLabel").value;
		let color = document.getElementById("lockerColor").value;
		let contents = document.getElementById("lockerContents").value;
		lockers._lockers[index].label = label;
		lockers._lockers[index].color = color;
		lockers._lockers[index].contents = contents;
    lockers._lockers[index].locked = false;
    // Updating Storage
    updateLocalStorage(lockers);
    // Informing User
		alert("Closing locker without locking");
    // redirecting to main page
		window.location = "index.HTML";
	}
}
// Retrieve the stored index from local storage
let index = localStorage.getItem(LOCKER_INDEX_KEY);
// using the getLocker method, retrieve the current Locker instance
let locker = lockers.getLocker(index);
// TODO: Write the code that will run on load here
if (locker.locked == true )
{
	unlock(locker);
}
else
{
	displayLockerInfo(locker);
}
