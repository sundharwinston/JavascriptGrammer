const Http = new XMLHttpRequest();
const url = 'https://jsonplaceholder.typicode.com/todos/';
Http.open("GET",url);
Http.send();
Http.onreadystatechange = function(event){
    if(this.readyState == 4 && this.status == 200){
        let json = JSON.parse(Http.responseText);
        console.log(Http);
        console.log(json);

        let id = json.id;
        let name = json.name;

        let userId = document.getElementById("id");
        if(userId) userId.innerHTML = id;
        let userName = document.getElementById("name");
        if(userName) userName.innerHTML = name;  
    }
};