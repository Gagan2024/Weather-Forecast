let loc=document.getElementById("location");
let tempicon=document.getElementById("temp-icon");
let tempvalue=document.getElementById("temp-value");
let climate=document.getElementById("climate");
let iconfile;
const searchinput=document.getElementById("search-input");
const searchbutton=document.getElementById("search-button");

searchbutton.addEventListener('click' , (e)=>
{
    e.preventDefault();
    getWeather(searchinput.value);
    searchinput='';
});
const getWeather= async(city) =>
    {
        try{
            const resposnse = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=1a1a5b9e00064ef33cec033e2c5add51`,
            {mode :'cors'}
            );
            const weatherData=await resposnse.json();
            console.log(weatherData);
            const {name}=weatherData;
            const {feels_like}=weatherData.main;
            const {id,main}=weatherData.weather[0];
            loc.textContent=name;
            climate.textContent=main;
            tempvalue.textContent=Math.round(feels_like-273);
            if(id>=200 && id<=300)
            {
                tempicon.src="thunderstorm.png";
            }
            if(id>=500 && id<=533)
            {
                tempicon.src="rain.png";
            }
            if(id>=600 && id<=625)
            {
                tempicon.src="snowman.png";
            }
            if(id==701)
            {
                tempicon.src="mist.png";
            }
            if(id==721)
            {
                tempicon.src="haze.png";
            }
            if(id ==800)
            {
                tempicon.src="clear.png";
            }
            if(id>=801 && id<=805)
            {
                tempicon.src="clouds.png";
            }

        }
    catch(error)
    {
        alert('City not found')
    }
    };

window.addEventListener("load" , ()=>
{
    let long;
    let lat;
    
    if( navigator.geolocation)
    {
        navigator.geolocation.getCurrentPosition((position)=>
        {
            long=position.coords.longitude;
            lat=position.coords.latitude;
            const proxy="https://cors-anywhere.herokuapp.com/";
            const api=`${proxy}api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=1a1a5b9e00064ef33cec033e2c5add51`

        
        fetch(api).then((resposnse)=>
        {
            return resposnse.json();
        })
    .then (data =>
        {
            const {name}=data;
            const {feels_like}=data.main;
            const {id, main}=data.weather[0];
            loc.textContent=name;
            climate.textContent=main;
            tempvalue.textContent=Math.round(feels_like-273);
            if(id>=200 && id<=300)
            {
                tempicon.src="thunderstorm.png";
            }
            if(id>=500 && id<=533)
            {
                tempicon.src="rain.png";
            }
            if(id>=600 && id<=625)
            {
                tempicon.src="snowman.png";
            }
            if(id==701)
            {
                tempicon.src="mist.png";
            }
            if(id==721)
            {
                tempicon.src="haze.png";
            }
            if(id ==800)
            {
                tempicon.src="clear.png";
            }
            if(id>=801 && id<=805)
            {
                tempicon.src="clouds.png";
            }
            console.log(data);


        })
    }
        )}
})