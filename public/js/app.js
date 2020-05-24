console.log("Front end console.log");

const formElement = document.getElementById('form');
const messageContent1 = document.getElementById('message-content-1');
const messageContent2 = document.getElementById('message-content-2');
formElement.addEventListener('submit', (event) =>{
    event.preventDefault();

    messageContent1.innerHTML = "Loading........"
    const inputValue  = document.getElementById('inputLocation').value;
    messageContent1.innerHTML = inputValue;
});