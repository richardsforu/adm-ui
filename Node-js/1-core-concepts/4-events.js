//Events
// All objects that emit events are instances of the EventEmitter class
// events module is required to emit events on event objects

const EventEmitter = require('events');
const ee = new EventEmitter();

// module-1
ee.on('event-1', () => {
    console.log('handlig event1 of module 1');
})

//module-2
ee.on('event-1', () => {
    console.log('handlig event1 of module 2');
})
ee.on('event-2', () => {
    console.log('hanmdling event2');

})

//ee.emit('event-2'); //=> emit one event on two diffent modules

/*
console.log('--- common logic');
setTimeout(() => {
    ee.emit('event-1');
    setTimeout(() => {
        ee.emit('event-2')
    }, 5000);
}, 2000); 


*/



//----------------------------------------

class Door extends EventEmitter {
    open() {
        console.log('door opened');
        this.emit('doorOpen', { num: 16, floor: 12 })

    }
    close() {
        console.log('door closed');
        this.emit('doorClosed', { num: 16, floor: 12 })
    }
}

const frontDoor = new Door();
const backDoor = new Door();




// Light
//-------------------------------------
frontDoor.on('doorOpen',(e)=>{
    console.log('LIGHTS ON... in '+e.num+' door number in '+e.floor+' floor');
    
})

frontDoor.on('doorClosed',(e)=>{
    console.log('LIGHTS OFF.. ');
    
})


setTimeout(()=>{
    frontDoor.open();
    backDoor.open();

    
},3000);

setTimeout(()=>{
    frontDoor.close();
    backDoor.close();
},5000);


frontDoor.open(); 
frontDoor.close(); 

 














