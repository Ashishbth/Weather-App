const btn = document.getElementById('submitBtn');
const cityName = document.getElementById('cityName');
const otp = document.getElementById('city_name');

const getInfo = async (e)=>{
    e.preventDefault();
    alert('hii');
    
    let cityVal = cityName.value;
    console.log("done")
    if(cityVal === ""){
        otp.innerText = `Plz write the Name before search`;
    }else{
        try {
            let url = `api.openweathermap.org/data/2.5/weather?q=Bettiah&appid=8b92b71032c50c06222a0d623605da14` ;
            const response = await fetch(url);
        } catch (error) {
            otp.innerText = `Plz write the City name Properly`;
            
        }

    }
}

btn.addEventListener('click' , getInfo);