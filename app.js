


/*Definicion de Variables para traer id y clases del html*/
var boton = document.querySelector('#btn-buscar');
var busquedaCiudad = document.querySelector('#inputCiudad');
var temperatura=document.querySelector('#temperatura');
var viento=document.querySelector('#viento');
var sunrise=document.querySelector('#sunrise');
var sunset=document.querySelector('#sunset');
var humedad =document.querySelector('#humedad');
var visibilidad=document.querySelector('#visibilidad');
/* var fecha =document.querySelector('#fechaActual');*/

boton.addEventListener('click',climaActual())

const a = 'http://api.openweathermap.org/data/2.5/forecast?q=Rosario&appid=2a46d3e788ed20e6df81b683111a2243'

/*console.log(a)*/
/*fetch('http://api.openweathermap.org/data/2.5/forecast?q=Rosario&appid=2a46d3e788ed20e6df81b683111a2243')
 .then(Response =>Response.json())
 .then (data => {
     console.log(data)
 })*/

function climaActual() {
    fetch('https://api.openweathermap.org/data/2.5/forecast?q=Rosario&units=metric&appid=2a46d3e788ed20e6df81b683111a2243')
    .then(Response => Response.json())
    .then (data => {
        console.log(data);
        var ParametoTemp =data.list[0].main.temp;
        console.log(ParametoTemp);
        var ParametroViento=data.list[0].wind.speed;
        console.log(ParametroViento);
        var ParametroAmanecer=data.city.sunrise;
        console.log (ParametroAmanecer)
        var ParametroAtardecer=data.city.sunset;
        console.log(ParametroAtardecer)
        var ParametroHumedad=data.list[0].main.humidity;
        console.log(ParametroHumedad)
        var ParametroVisibilidad=data.list[0].visibility;
        console.log (ParametroVisibilidad)
        var ParametroFecha=data.list[0].dt;
        console.log(ParametroFecha)
        var ParametroLatitud =data.city.coord.lat;
        console.log(ParametroLatitud)
        var ParametroLongitud =data.city.coord.lon;
        console.log(ParametroLongitud)
        var ParametroPresion = data.list[0].main.pressure;
        console.log(ParametroPresion)
        var ParametroCilma=data.list[0].weather[0].description;
        console.log(ParametroCilma)
        var ParametroLLuvia=data.list[0].pop;
        console.log (ParametroLLuvia)
        var ParametroCiudad=data.city.name;
        console.log(ParametroCiudad)
        var ParametroPais=data.city.country;
        console.log(ParametroPais)
        var ParamentroNubosidad=data.list[0].weather[0].description;
        console.log (ParamentroNubosidad)

        temperatura.innerHTML=ParametoTemp+'°C';
        viento.innerHTML=ParametroViento+'Km/h'
        amanecer.innerHTML=ParametroAmanecer+'AM'
        sunset.innerHTML=ParametroAtardecer+'PM'
        humedad.innerHTML=ParametroHumedad+'%'
        visibilidad.innerHTML=ParametroVisibilidad/1000+'Km';
        presion.innerHTML=ParametroPresion+'Hpa'
        lluvia.innerHTML=ParametroLLuvia+'%'
        ciudad.innerHTML=ParametroCiudad +','+ ParametroPais
        var conversion=ParamentroNubosidad
        var primeraMayusculas=conversion.substring(0,1);
        primeraMayusculas=primeraMayusculas.toLocaleUpperCase();
        console.log(primeraMayusculas)
        var TodasMinusculas=
        nuvosidad.innerHTML=ParamentroNubosidad;
        fecha.innerHTML=ParametroFecha;
    })
    
}


    


