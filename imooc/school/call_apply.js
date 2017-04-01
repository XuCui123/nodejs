var pet = {
  words: '...',
  speak(say){
    console.log(say + ' ' + this.words)
  }
}

// pet.speak('Speak')

var dog = {
  words: 'Wang'
}

pet.speak.call(dog,'Speak')