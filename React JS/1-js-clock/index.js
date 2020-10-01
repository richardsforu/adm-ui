
let indianClock=document.querySelector("#indianClock");
let dubaiClock=document.querySelector("#dubaiClock");
let usClock=document.querySelector("#usClock");


function jsClock(props){
    let date=new Date().toLocaleTimeString('en-US',{timeZone:props})
    let ui=`
    <div class="card class=col-4">
    <div class="card-header"> 
    <span>${props} </span> 
    </div>
    <div class="card-body">
    <p> ${date} </p>
    </div>
</div>
    `
    return ui;
}

let indianClockV1=document.querySelector("#indianClockV1");
let dubaiClockV1=document.querySelector("#dubaiClockV1");
let usClockV1=document.querySelector("#usClockV1");

function reactClock(props){
    let date=new Date().toLocaleTimeString('en-US',{timeZone:props})
    let ui=
    <div class="card class=col-4">
        <div class="card-header"> 
        <span>{props} </span> 
        </div>
        <div class="card-body">
        <p> {date} </p>
        </div>
    </div>
    
    return ui;
}

setInterval(() => {
    indianClock.innerHTML=jsClock('Asia/Kolkata');
    dubaiClock.innerHTML=jsClock('Asia/Dubai');
    usClock.innerHTML=jsClock('America/New_York');

   ReactDOM.render(reactClock('Asia/Kolkata'),indianClockV1);
   ReactDOM.render(reactClock('Asia/Dubai'),dubaiClockV1);
   ReactDOM.render(reactClock('America/New_York'),usClockV1);

},1000)
