var globleVariable = 'This is globle variable'

function globleFunction(){
  var localVariable = 'This is local variable'
  console.log('Visit globle/local variable')
  console.log(globleVariable)
  console.log(localVariable)

  globleVariable = 'This is changed variable'
  console.log(globleVariable)

  function localFunction(){
    var innerLocalVariable = 'This is inner local variable'
    console.log('Visit globle/local/innerlocal variable')
    console.log(globleVariable)
    console.log(localVariable)
    console.log(innerLocalVariable)
  }
  localFunction()
}

globleFunction()