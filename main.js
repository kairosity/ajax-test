var xhr = new XMLHttpRequest(); //inbuilt js object to consume APIs

xhr.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        document.getElementById("data").innerHTML = this.responseText;
    }
};

xhr.open("GET", "https://ci-swapi.herokuapp.com/api/");

xhr.send();