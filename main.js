const baseUrl = "https://ci-swapi.herokuapp.com/api/";

function getData(type, cb){ //takes 2 params type and cb func.
    var xhr = new XMLHttpRequest(); //inbuilt js object to consume APIs

    xhr.open("GET", baseUrl + type + "/"); //get used to get data from server - adds the type to the url to get full api request
    xhr.send(); //to send the above request

    xhr.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            cb(JSON.parse(this.responseText)); //this says put this data in the cb func. 
        }
    };

}

function getTableHeaders(obj){
    var tableHeaders = [];

    Object.keys(obj).forEach(function(key){ //Object.keys is a method - it will grab all the obj keys and for each key do the following: 
        tableHeaders.push(`<td>${key}</td>`); //push them into the th arr and format them like so. 
    });

    return `<tr>${tableHeaders}</tr>`; //returns a row with all the headers 
}

function writeToDocument(type) { //func to write the results to the page - takes the type requested as a param. 
    var tableRows = []; // empty tr arr
    var el = document.getElementById("data"); //selects the div area to place the data in.
    el.innerHTML = ""; // empty out the innerhtml.

    getData(type, function(data){ //calls the getData func with the type from above and the cb func looking for the data. That is the cb in the original func declaration the "data" param here is the JSON.parse(this.responseText) in the original.
        data = data.results; //redefines data to include the results - results??
        var tableHeaders = getTableHeaders(data[0]); // the first element in the data will be the keys obj. 

        data.forEach(function(item){ //for each bit of data do the following:
            var dataRow = []; //create an empty array for each row.

            Object.keys(item).forEach(function(key){
                var rowData = item[key].toString();
                var truncatedData = rowData.substring(0, 15);
                dataRow.push(`<td>${truncatedData}</td>`); //for each key return the value pair and put it in a table cell.
            })
            tableRows.push(`<tr>${dataRow}</tr>`);
            });

            el.innerHTML = `<table>${tableHeaders}${tableRows}</table>`;
    });
        
}