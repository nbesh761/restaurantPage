function toggleColor()
{
    document.getElementById("easyRead").classList.toggle("class3");
}

/*JS function for the easy Read and Normal Read butttons*/
function myfunction() {
    document.getElementById("easyRead").style.fontSize = "110%";
    document.getElementById("easyRead").style.backgroundColor = "green";
    document.getElementById("hide").style.display = "inline";
    document.getElementById("nop").style.display = "none";

}

function run() {
    document.getElementById("easyRead").style.backgroundColor = "coral";
    document.getElementById("easyRead").style.fontSize = "100%";
    document.getElementById("hide").style.display = "none";
    document.getElementById("nop").style.display = "inline";
}



// Adds another local javascript file to the document
//saves having to add the script manualy on each page
function importJSFile(path) {
    var imported = document.createElement('script');
    imported.src = path;
    document.head.appendChild(imported);
}

importJSFile('storage.js');





/*-------JS for Address of our resturant*/
var list = [];
var menuList = [];
//var myList = [];

function addAndSave() {
    /*Calling the form with a name dataForm*/
    var myForm = document.forms['dataForm'];

    /*Adding the files that the user insert*/

    var myAddress = myForm.elements['newAddress'];
    var openHours = myForm.elements['openingHour'];
    var closeHours = myForm.elements['closingHour'];

    /*Creare an object*/

    var myData = new Object();

    /*Adding up the files into the object*/

    myData.myAddress = myAddress.value;
    myData.openHours = openHours.value;
    myData.closeHours = closeHours.value;

    /*Sending an object to create an array*/
    addToList(myData);
}

/*Sorting based on by name of my Address*/

function sortByName_AtoZ(obj1, obj2) {
    return obj1.myAddress.localeCompare(obj2.myAddress);
}

function addToList(myData) {
    var list = getSavedList("NathenList");

    list.push(myData);

    list.sort(sortByName_AtoZ);



    saveList("NathenList", list);

    var htmlList = buildTable(list);
}





function buildTable(list) {

    var myTable = document.getElementById("addHere");
    myTable.innerHTML = "";
    /*Create the Header*/
    myTable.innerHTML += "<tr> <th>Address</th> <th>Opening Hours</th><th>Closing Hours</th></tr>";
    for (i = 0; i < list.length; i++) {
        myTable.innerHTML += "<tr><td>" + list[i].myAddress + "</td><td>" + list[i].openHours + "</td><td>" + list[i].closeHours + "</td></tr>"
    }


}






function savePage_loadSavedData() {
    var list = getSavedList("NathenList");

    buildTable(list);
}

function clearAllData() {
    clearAllLocalStorage();
    buildTable([]);
}


/*-----------------JS for the Menu--------------------*/





function addAndSaveMenu() {
    /*Getting the form */
    var menuForms = document.forms['menuForm'];

    var menu = menuForms.elements['menuType'];
    var foodName = menuForms.elements['foodName'];
    var price = menuForms.elements['cost'];
    var detail = menuForms.elements['detail'];

    /*Create a menu object*/

    var menuObject = new Object();

    menuObject.menu = menu.value;
    menuObject.foodName = foodName.value;
    menuObject.price = price.value;
    menuObject.detail = detail.value;

    /*Send my menuObject to create an array*/

    AddMenuList(menuObject);





}

function sortByType_AtoZ(obj1, obj2) {
    return obj1.menu.localeCompare(obj2.menu);
}

function AddMenuList(menuObject) {
    var menuList = getSavedList("NathenMenuList");

    menuList.push(menuObject);

    menuList.sort(sortByType_AtoZ);


    saveList("NathenMenuList", menuList);

    var htmlMenuList = buildMenuTable(menuList);
}

function buildMenuTable(menuList) {


    var str1 = "Breakfast";
    var str2 = "Dessert";
    var str3 = "Main";
    var str4 = "Beverages";

    for (j = 0; j < menuList.length; j++) {


        if (menuList[j].menu.localeCompare(str1)) {
            var menuTable = document.getElementById("addMenuHere");
            menuTable.innerHTML = " ";
            menuTable.innerHTML += "<tr> <th>Catagory</th> <th>Name</th><th>Price</th><th>Detail</th></tr>";

            for (i = 0; i < menuList.length; i++) {
                menuTable.innerHTML += "<tr><td>" + menuList[i].menu + "</td><td>" + menuList[i].foodName + "</td><td>" + menuList[i].price + "</td><td>" + menuList[i].detail + "</td></tr>"
            }


        }



        if (menuList[j].menu.localeCompare(str2)) {
            var menuTable = document.getElementById("addSaladHere");
            menuTable.innerHTML = " ";
            menuTable.innerHTML += "<tr> <th>Catagory</th> <th>Name</th><th>Price</th><th>Detail</th></tr>";

            for (i = 0; i < menuList.length; i++) {
                menuTable.innerHTML += "<tr><td>" + menuList[i].menu + "</td><td>" + menuList[i].foodName + "</td><td>" + menuList[i].price + "</td><td>" + menuList[i].detail + "</td></tr>"
            }


        }
        if (menuList[j].menu.localeCompare(str3)) {
            var menuTable = document.getElementById("addMainHere");
            menuTable.innerHTML = " ";
            menuTable.innerHTML += "<tr> <th>Catagory</th> <th>Name</th><th>Price</th><th>Detail</th></tr>";

            for (i = 0; i < menuList.length; i++) {
                menuTable.innerHTML += "<tr><td>" + menuList[i].menu + "</td><td>" + menuList[i].foodName + "</td><td>" + menuList[i].price + "</td><td>" + menuList[i].detail + "</td></tr>"
            }

        }

        /*
          else if(menuList[j].menu.localeCompare(str4))
              {
                   var menuTable = document.getElementById("addDrinkHere");
              menuTable.innerHTML = " ";
              menuTable.innerHTML += "<tr> <th>Catagory</th> <th>Name</th><th>Price</th><th>Detail</th></tr>";

              for (i = 0; i < menuList.length; i++) {
                  menuTable.innerHTML += "<tr><td>" + menuList[i].menu + "</td><td>" + menuList[i].foodName + "</td><td>" + menuList[i].price + "</td><td>" + menuList[i].detail + "</td></tr>"
              }
                  
              }
        */
    }









}


function menuPage_loadSavedData() {
    var menuList = getSavedList("NathenMenuList");

    buildMenuTable(menuList);
}




/*
for(int i=0 ; i < menuList.length ; i++)
        {
            menuTable.innerHTML += "<tr><td>" + menuList[i].menu + "</td><td>" + menuList[i].foodName + "</td><td>" + menuList[i].price + "</td><td>" + menuList[i].detail + "</td></tr>";
        }
        
        for(i=0 ; i < list.length ; i++)
        {
            myTable.innerHTML += "<tr><td>"+list[i].myAddress+"</td><td>"+list[i].openHours+"</td><td>"+list[i].closeHours+"</td></tr>"
        }
    





function createP(myData1)
{
    list.push(myData1);
    
    var parList = buildPara(list);
    
}

function buildPara(menuList)
{
    var puma = document.getElementById("addP");
    p.innerHTML = "";
    
    for(i=0 ; i<list.length ; i++)
        {
            puma.innerHTML += list[i].menuGroup + list[i].foodName ;
        }
}


*/
