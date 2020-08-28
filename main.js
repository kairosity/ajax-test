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

function writeToDocument(type) { //func to write the results to the page - takes the type requested as a param. 
    getData(type, function(data){ //calls the getData func with the type from above and the cb func looking for the data. That is the cb in the original func declaration the "data" param here is the JSON.parse(this.responseText) in the original.
        document.getElementById('data').innerHTML = data; // sets the data response data into the data div on the webpage.
    })
}