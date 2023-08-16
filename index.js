function carrito(cantidadMatesAcero,cantidadMateMadera) {
    const montoFinal=(cantidadMatesAcero *2000)/2+cantidadMateMadera*1500
    return montoFinal
  }

alert('Agrega tus productos al carrito!Mates de acero 50%off')
    const cantidadMatesAcero = parseFloat(prompt('Cuántos Mates de Acero quiere agregar al carrito?'))
    const cantidadMateMadera = parseFloat(prompt('Cuántos Mates de Vidrio quiere agregar al carrito?'))
    const resultado = carrito(cantidadMatesAcero,cantidadMateMadera)

  alert('El total de tu pedido es $'+ resultado +' Muchas gracias por tu compra! Que lo disfrutes')


const cantidadRegalosDisponibles=3

for (let cantRegalosEnCarrito=0;cantRegalosEnCarrito<cantidadRegalosDisponibles;cantRegalosEnCarrito=cantRegalosEnCarrito+1){
      alert('Tenes un regalo para sumar a tu carrito!')
      alert('Sumaste '+(cantRegalosEnCarrito+1)+' a tu carrito!')
  }
  alert('Ya no quedan mas regalos :( Volve pronto!')

  const comoFueLaCompra= prompt('Te gusto tu compra?')
  if (comoFueLaCompra==='si'){
    alert('Nos alegra mucho!')
    }else { 
        alert('Lo sentimos mucho, esperamos mejorar')
    }
