function learn(someting){
  console.log(someting)
}

function we(callback,someting){
  someting += ' is cool'
  callback(someting)
}

we(learn,'Nodejs')

we(function(someting){
  console.log(someting)
},'Jade')