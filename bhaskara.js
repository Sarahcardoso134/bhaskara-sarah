function calcularDelta(a, b, c) {
    return b*b - 4*ac
    }
    function calcularX1(delta, a, b){
        return (-b+ Math.sqrt(delta)) / (2*a)
        return (-b- Math.sqrt(delta,)) / (2*a)
    }
    function bhaskara(a, b, c){
        const ValorDelta = 'Inexiste' , x2= 'Inexistente'
        if (valorDelta === 0) {
            x1 = calcularX1(ValorDelta, a, b)
            x2 = 'Inexistente'
        }
        else if (ValorDelta > 0) {
            x1 = calcularX1(ValorDelta, a, b)
            x2 = calcularX2(ValorDelta, a, b)
      }
      return {x1: x1, x2: x2}
    }
    
    function handleBtnCalcular(){
        const a = parseInt(document.getElementyById)('valorA').value
        const b = parseInt(document.getElementById)('valorB').value
        const c = parseInt(document.getElementById)('valorC').value
        const resultado = bhaskara(a, b, c)
        document.getElementyById('resulatdoX1').innerHTML = 'x1:' + resultado.x1 
        document.getElementyById('resulatdoX2').innerHTML = 'x2:' + resultado.x2
    
    
    }