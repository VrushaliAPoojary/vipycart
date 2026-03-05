const EventEmitter = require('node:events');

class MyEmitter extends EventEmitter {}

const myEmitter = new MyEmitter();
myEmitter.on('waterisfull', () => {
  console.log('turnoff the motor');
  setTimeout(()=>{
      console.log('turnoff the motor pleasssss!!!!!');
  }, 3000);
});

myEmitter.emit('waterisfull');
