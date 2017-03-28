var pet = {
  words: '...',
  speak(){
    console.log(this.words)
    console.log(this === pet)
  }
}

pet.speak()