let currency = "USD"
fetch("https://api.coindesk.com/v1/bpi/currentprice.json")
.then((data)=>{
    return data=data.json()
}).then((newData)=>{
   console.dir(newData);
   document.querySelector('.rates').innerHTML=`Bitcoin Rates ${newData["bpi"][currency]["symbol"]} :${newData["bpi"][currency]["rate"]}`
   console.log(newData["bpi"][currency]["rate"]);
   console.log(newData["bpi"][currency]["rate"]);
   
   
   
    return newData
})
const cur = document.querySelector('#currency')
cur.addEventListener('click',(e)=>{
    currency = e.target.value
    setInterval(() => {
        
    
fetch("https://api.coindesk.com/v1/bpi/currentprice.json")
.then((data)=>{
    return data=data.json()
}).then((newData)=>{
   console.dir(newData);
   document.querySelector('.rates').innerHTML=`Bitcoin Rates ${newData["bpi"][currency]["symbol"]} :${newData["bpi"][currency]["rate"]}`
   console.log(newData["bpi"][currency]["rate"]);
   console.log(newData["bpi"][currency]["rate"]);
   
   
   
    return newData
})
}, 2000);



    // console.log(e.target.value);
    
})