console.log(data);
var random = Math.floor(Math.random() * 30);
document.getElementById('id').innerHTML = data[random].name;
document.getElementById('law-desc').innerHTML = data[random].description;