function calcularImporte (precio1, precio2, precio3, precio4){
    var sumaPrecio1y2 = precio1 + precio2;
    var sumaPrecio3y4 = precio3 + precio4;
    var resultadoMultiplicacion = sumaPrecio1y2 * sumaPrecio3y4;
    
    if (resultadoMultiplicacion > 50){
      console.log ("¡El número es mayor que 50!" );
    }else{
      console.log ("¡El número es menor que 50!" );
    }
  }
  calcularImporte(10,5,2,3)