var EvenEmitter = require('events').EventEmitter

var life = new EvenEmitter()

life.setMaxListeners(11)
//addEventListener

function water(who){
  console.log('Give ' + who + ' water1')
}
life.on('event1',water)

life.on('event1',function(who){
  console.log('Give ' + who + ' water2')
})

life.on('event2',function(who){
  console.log('Give ' + who + ' water3')
})

life.on('event2',function(who){
  console.log('Give ' + who + ' water4')
})

life.removeListener('event1',water)
life.removeAllListeners('event1')

life.emit('event1','people1')
life.emit('event2','people2')

console.log(life.listeners('event1').length)
//console.log(EventEmitter.listenerCount(life,'event1'))