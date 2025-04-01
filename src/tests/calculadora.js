function ehPar(n) {
  if (n%2 === 0){
      return ('O número é par!')
  } else if(n%2 !=0){
      return ('O número não é par!')
  }
      
}

function sub(a, b) {
  return a - b
}

function contarCaracteres(texto) {
  return (texto.length)
}

module.exports = { sub, ehPar, contarCaracteres}
