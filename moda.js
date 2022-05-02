const lista1 = [
    1,
    2,
    3,
    1,
    4,
    2,
    5,
    2,
    1,
    3,
    6,
];

const lista1Count = {};

lista1.map(

    function (elemento){
        if(lista1Count[elemento]){
            lista1Count[elemento] += 1;
        }else{
            lista1Count[elemento] = 1;
        }
        
    }
);

const lista1Array = Object.entries(lista1Count).sort(
    function (elementoA, elementoB){
        return elementoA[1] - elementoB[2];
    }
);

const moda = lista1Array[lista1Array.length -1];






















function calcularMediaAritmetica(lista){
    const sumaLista = lista.reduce(
        function(valorAcumulado = 0, nuevoElemento){
            return valorAcumulado + nuevoElemento
        }
    );
    
    const promedioLista = sumaLista / lista.length; 
    return promedioLista;
    }
   
   
   const mitadLista1 = parseInt(lista1.length / 2);
   
   function esPar(numerito){
       if (numerito % 2 === 0){
           return true;
       }else{
           return false;
       }
   
   }
   
   
   let mediana;
   
   if(esPar(lista1.length)) {
       const elemento1 = lista1[mitadLista1 - 1];
       const elemento2 = lista1[mitadLista1] ;
   
   
       const promedioElemento1y2 = calcularMediaAritmetica([
           elemento1,
           elemento2,
       ]);
   
       
   
   mediana = promedioElemento1y2;
   
       
   }else{
       mediana = lista1[mitadLista1];
   }