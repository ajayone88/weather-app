console.log("Front end console.log");

const formElement = document.getElementById('form');
const messageContent1 = document.getElementById('message-content-1');
const messageContent2 = document.getElementById('message-content-2');

formElement.addEventListener('submit', (event) =>{
    event.preventDefault();

    messageContent1.innerHTML = "Loading........";
    messageContent2.innerHTML = "";
    const inputValue  = document.getElementById('inputLocation').value;
    getWeatherDetails(inputValue);
});

const getWeatherDetails = (location) =>{
    let url = `/weather?location=${location}`;
    fetch(url).then(response => response.json()).then(response =>{
           if(response.cod !== 200){
                return messageContent1.innerHTML = response.message;
           }
            messageContent1.innerHTML = `Weather report of city : ${response.name}`;
            messageContent2.innerHTML = `The temperature is ${response['main'].temp} and pressure is ${response['main'].pressure}`;
        }).catch(() =>{
            messageContent1.innerHTML = "Service unavailable"
        });

};