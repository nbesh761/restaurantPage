/*
 Local Web Storage
 https://www.w3schools.com/html/html5_webstorage.asp

 With web storage, web applications can store data locally within the user's browser.
 
 Web storage is per origin (per domain and protocol). All pages, from one origin, can store and access the same data.

  localStorage - stores data with no expiration date
  sessionStorage - stores data for one session (data is lost when the browser tab is closed)
*/

function clearAllLocalStorage()
{
    localStorage.clear();
}

function saveVariable(name, value)
{
    localStorage.setItem(name, value);
}

function getSavedVariable(name)
{ 
  var foundValue = localStorage.getItem(name);
  if(foundValue == null) foundValue=""; //if no varibale found return an empty string
  return  foundValue;  
}

function saveList(name, list)
{
    var toString = JSON.stringify(list);//turns the list into a String
                                        //using the JSON formate
    localStorage.setItem(name, toString);
}

function getSavedList(name)
{
  var foundValue = localStorage.getItem(name);
  var savedList = []; // if no saved varibale found will return an empty list
  if(foundValue != null) 
        savedList = JSON.parse(foundValue);
  
  return  savedList;  
}

