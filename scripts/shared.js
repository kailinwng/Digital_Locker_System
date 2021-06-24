/**
 * shared.js
 * This file contains shared code that runs on both view.html and index.html
 */

// Constants used as KEYS for LocalStorage
const LOCKER_INDEX_KEY = "lockerIndex";
const LOCKER_DATA_KEY = "lockerData";
// TODO: Write code to implement the Locker class
class Locker
{
	// Constructor
	constructor(id = "")
	{
		this._id = id;
		this._label = "";
		this._locked = "";
		this._pin = "";
		this._color = "3399ff";
		this._contents = "";
	}
	// Accessors
	get id() { return this._id; }
	get label() { return this._label; }
	get locked() { return this._locked; }
	get pin() { return this._pin; }
	get color() { return this._color; }
	get contents() { return this._contents; }
	// Mutators
	set label(newLabel)
	{
		this._label = newLabel;
	}
	set locked(newLocked)
	{
		this._locked = newLocked;
	}
	set pin(newPin)
	{
		this._pin = newPin;
	}
	set color(newColor)
	{
		this._color = newColor;
	}
	set contents(newContents)
	{
		this._contents = newContents;
	}
	// Methods
	fromData(data)
	{
		this._id = data._id;
		this._label = data._label;
		this._locked = data._locked;
		this._pin = data._pin;
		this._color = data._color;
		this._contents = data._contents;
	}
}
// TODO: Write code to implement the LockerList class
class LockerList
{
	// Constructor
	constructor()
	{
		this._lockers = [];
	}
	// Accessors
	get lockers() { return this._lockers; }
	get count() { return this._lockers.length; }
	// Methods
	addLocker(id)
	{
		this._lockers.push(new Locker(id));
	}
	getLocker(index)
	{
			return this._lockers[index];
	}
	removeLocker(id)
	{
		for ( let i = 0; i < this.count; i++ )
		{
			if ( this._lockers[i]._id == id )
      {
				this._lockers.splice(i,1);
				break;
			}
    }
	}
	fromData(data)
	{
		for(let i = 0; i < data._lockers.length; i++)
		{
			let newLocker = new Locker();
			newLocker.fromData(data._lockers[i]);
			this._lockers.push(newLocker);
		}
	}
}
// Global LockerList instance variable
let lockers = new LockerList();
// TODO: Write the function checkIfDataExistsLocalStorage
function checkIfDataExistsLocalStorage()
{
	let data = localStorage.getItem(LOCKER_DATA_KEY);
  if (!data)
  {
    // Data doesn't exist
    return false;
  }
  else
  {
    // Data exists
    return true;
  }
}
// TODO: Write the function updateLocalStorage
function updateLocalStorage(data)
{
	localStorage.setItem(LOCKER_DATA_KEY, JSON.stringify(data));
}
// TODO: Write the function getDataLocalStorage
function getDataLocalStorage()
{
	let retrievedData = JSON.parse(localStorage.getItem(LOCKER_DATA_KEY));
	return retrievedData;
}
// TODO: Write the code that will run on load here
if ( checkIfDataExistsLocalStorage() == true )
{
	let dataFromStorage = getDataLocalStorage();
	lockers.fromData(dataFromStorage);
}
else
{
	lockers.addLocker("A1");
  updateLocalStorage(lockers);
}
