const request = require('request');
const appid = "e9bfbcc8823b3ddd8c8702a938760a80";

const forecast = (location, callback) =>{
    let baseUrl = `http://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${appid}`;
    request({url: baseUrl, json: true}, (error, response)=>{
        if(error){
            callback({error:"Service not reach able"}, undefined);
        }else if(response.error){
            callback({error:"Invalid Location"}, undefined);
        }else{
            callback(undefined, response.body);
        }
    });
};

module.exports = forecast;



