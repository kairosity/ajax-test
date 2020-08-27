
function getData(cb){ //this says this func takes a func as a param.
    var xhr = new XMLHttpRequest(); //inbuilt js object to consume APIs


    xhr.open("GET", "https://ci-swapi.herokuapp.com/api/"); //get used to get data from server
    xhr.send(); //to send the above request


    xhr.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            cb(JSON.parse(this.responseText)); //this says put this data in the cb func. 
        }
    };

}

function printDataToConsole(data) { //another func that prints the data to console.
    console.log(data);
}

getData(printDataToConsole); //calling the getdata func with the printdata func as the cb function. and that takes data as an arg. 
