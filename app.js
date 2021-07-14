


/*Definicion de Variables para traer id y clases del html*/

var boton = document.querySelector('.botonbuscar');
var busqueda = document.querySelector('#inputCiudad');
var temperatura=document.querySelector('#temperatura');
var viento=document.querySelector('#viento');
var sunrise=document.querySelector('#sunrise');
var sunset=document.querySelector('#sunset');
var humedad =document.querySelector('#humedad');
var visibilidad=document.querySelector('#visibilidad');

console.log(busqueda.value);



boton.addEventListener('click' , climaActual());
/*boton.addEventListener('click',climaActual());*/



function climaActual() {
    console.log(busqueda.value)
    fetch('https://api.openweathermap.org/data/2.5/forecast?q='+busqueda.value+'&units=metric&appid=2a46d3e788ed20e6df81b683111a2243')
    .then(Response => Response.json())
    .then (data => {
        console.log(data);
        var ParametoTemp =data.list[0].main.temp;
        console.log(ParametoTemp);
        var ParametroViento=data.list[0].wind.speed;
        console.log(ParametroViento);

        /*Comienzo Amanecer*/
        var ParametroAmanecer=data.city.sunrise;
        var AmanecerFecha=new Date(ParametroAmanecer*1000);
        var AmanecerHora=AmanecerFecha.getHours();
        var AmanecerMinutos=AmanecerFecha.getMinutes();
        console.log (ParametroAmanecer);
        /*Fin Amanecer*/

        /*Comienzo Atardecer*/
        var ParametroAtardecer=data.city.sunset;
        var AFecha=new Date(ParametroAtardecer*1000);
        var AtardecerHora=AFecha.getHours();
        var AtardecerMinutos=AFecha.getMinutes();
        console.log(ParametroAtardecer);
        /*Fin Atardecer*/

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
        var dia=data.list[0].dt;

        console.log(dia)

        /*Latitud y Longitu*/

        var lat = data.city.coord.lat;
        console.log(lat);
        var lon = data.city.coord.lon;
        console.log(lon);

        


        temperatura.innerHTML=ParametoTemp+'°C';
        viento.innerHTML=ParametroViento+'Km/h'
        amanecer.innerHTML=AmanecerHora+':'+AmanecerMinutos+' AM';
        sunset.innerHTML=AtardecerHora+':'+AtardecerMinutos+' PM';
        humedad.innerHTML=ParametroHumedad+'%'
        visibilidad.innerHTML=ParametroVisibilidad/1000+'Km';
        presion.innerHTML=ParametroPresion+'Hpa'
        lluvia.innerHTML=ParametroLLuvia+'%'
        ciudad.innerHTML=ParametroCiudad +','+ ParametroPais
        nuvosidad.innerHTML=ParamentroNubosidad;
        
        const Cadenafecha = dia ;

        const dias = [
            'Sunday',
            'Monday',
            'Tuesday',
            'Wednesday',
            'Thursday',
            'Friday',
            'Satuday',
        ]

        const DiaNumero=new Date(Cadenafecha*1000).getDay();
        const NombreDia=dias[DiaNumero];
         
        console.log (NombreDia);

        console.log (dia);

        fecha.innerHTML=NombreDia;

        var hoy = new Date();
        var hora = hoy.getHours()+':'+(hoy.getMinutes()+1);
        console.log (hora);

        fecha.innerHTML=NombreDia+','+' '+hora;

        climaSieteDias(lat,lon);
    })
    .catch(error => alert("No existe la ciudad o no se encuentra registrado en la API"));
    /*.catch (error => alert("Ciudad No Encontrada"));*/
    
}

function climaSieteDias(lat, lon){
    fetch('https://api.openweathermap.org/data/2.5/onecall?lat='+lat+'&lon='+lon+'&units=metric&appid=2a46d3e788ed20e6df81b683111a2243')
    .then(response => response.json())
    .then(data => {
        console.log(data.daily);

        arreglodias=data.daily;

        console.log(arreglodias);

        arreglodias.pop();

        console.log(arreglodias)

        arreglodias.forEach(function(dayInfo, index) {

            let gradoHoy = document.querySelector('#grados'+index);
            /*console.log(gradoHoy)*/
            let grado = (dayInfo.temp.day).toString(); 
            gradoHoy.innerHTML = grado + '°C';
            console.log(gradoHoy);
        })
    })
}


/*Prueba de Inertar los Datos en los dias de la semana*/
/*-32.94&lon=-60.63*/

/* fetch ('https://api.openweathermap.org/data/2.5/onecall?lat='+lat+'&lon='+lon+'&daily&units=metric&appid=2a46d3e788ed20e6df81b683111a2243')
 .then (Response=>Response.json())
 .then (data => {
     console.log(data)

     var ArrayDay=data.daily;

     console.log (ArrayDay)

     console.log (data.daily[0].temp.day)
     console.log (data.daily[1].temp.day)
     console.log (data.daily[2].temp.day)
     console.log (data.daily[3].temp.day)
     console.log (data.daily[4].temp.day)
     console.log (data.daily[5].temp.day)
     console.log (data.daily[6].temp.day)

     grados0.innerHTML=data.daily[0].temp.day+'°C'
     grados1.innerHTML=data.daily[1].temp.day+'°C'
     grados2.innerHTML=data.daily[2].temp.day+'°C'
     grados3.innerHTML=data.daily[3].temp.day+'°C'
     grados4.innerHTML=data.daily[4].temp.day+'°C'
     grados5.innerHTML=data.daily[5].temp.day+'°C'
     grados6.innerHTML=data.daily[6].temp.day+'°C'

     ArrayDay.forEach(function(valor,indice,ArrayDay) {
         console.log(valor , indice);
         
     });
     
 }) */


