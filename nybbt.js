function updateTime() {
    var date = new Date();
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var seconds = date.getSeconds();

    var formattedTime = hours + ":" + (minutes < 10 ? "0" + minutes : minutes) + ":" + (seconds < 10 ? "0" + seconds : seconds);

    document.getElementById("current-time").innerHTML = formattedTime;
  }
updateTime();
setInterval(updateTime, 100); //updateing every second (makes it look dynamic)


document.getElementById("search-btn").onclick = function() {
    let searchTerm = document.getElementById("search").value.toUpperCase()
    for(let i = 0; i <= Object.keys(data).length; i++){
        if(data[searchTerm].number == i){
            map.flyTo(data[searchTerm].coords, 17)
        }
    }
}