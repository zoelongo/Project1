$.ajax({
    url: "https://api.darksky.net/forecast/adfe5cc16a905885c982c34d13cc03a4/37.8267,-122.4233",
    dataType: 'jsonp'
}).then((data) => {

    console.log("all data", data)
    console.log("current data", data.currently.temperature)
    let temp = data.currently.temperature
    let header = document.getELementById('parent1')
    header.innerHTML = "Map.Me" + temp
});