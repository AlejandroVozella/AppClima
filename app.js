let c = "Rosario";
let p = "Argentina";





const a ='https://api.openweathermap.org/data/2.5/weather?id=3838583&appid=2a46d3e788ed20e6df81b683111a2243'

/*console.log (a)*/

fetch(a) 
.then (Response=>Response.json())
.then (main=>{
    console.log(main)
    var temperatura=main.main.temp-273/*temperatura*/
    visiblidad=main.visibility/1000/*visilidad*/
    sunrise=main.sys.sunrise
    sunset=main.sys.sunset
    viento1=main.wind.speed;
    viento=main.wind.deg;
    humedad=main.main.humidity/*humedad*/
    var ciudad=main.name /*Asigna el nombre de una Ciudad a una variable*/
    console.log(ciudad)
    var temperatura =temperatura.toFixed(1);
    document.getElementById("city").innerHTML=ciudad; /*Cambio valor Ciudad*/
    document.getElementById("UV").innerHTML=visiblidad+"km";/*cambio valor visiblidad*/
    document.getElementById("viento").innerHTML=viento+"km/h";
    document.getElementById("humedad").innerHTML=humedad+'%'
    document.getElementById("visibilidad").innerHTML=visiblidad+"km"
    document.getElementById("sunset").innerHTML=sunset;
    /*document.getElementById("sunrise").innerHTML=sunrise;*/
    document.getElementById("temperatura").innerHTML=temperatura+"C";
    
})
/*'http://api.openweathermap.org/data/2.5/forecast?q='+inputValor.value+'&appid=1dfce91cad2e917bc5d3ca4b9ad60418'*/

/*<input type="text" name="buscar" id="inputValor" placeholder="Search for places ...">
var inputValor = document.querySelector('#inputValor');*/