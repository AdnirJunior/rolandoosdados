//1000 lancamentos
//iniciar com variavel chamad const count = 0;
//essa é a variavel de contagem count[rollOfDice] = count[rollOfDice] + 1;
//o tamanho da barra de acordo com as vezes q caiu  minhaBarra.style.width = `${larguraDaBarra}px`;

//botao click vai escolher dois numeros aleatorios de 1 a 12
//esses numeros serao somados e colocados em 11 barras (de 2 a 12)


//}

//}

    const eleven = [0, 0, 0, 0, 0, 0, 0, 0 ,0 ,0 ,0]


    function rollOfDice (){
    
    let result1 = (Math.floor(Math.random() * 6 + 1));
       
    return result1;
    
}




function rollOf2dices () {
    const dado1 = rollOfDice()
    const dado2 = rollOfDice()
    
    return dado1 + dado2;
}




function somando(){

    for(let i=0; i<1000;i++){
    
    const result2 = rollOf2dices()
    if(result2 === 2) {
        eleven[0] = eleven[0] + 1;
    } else if ( result2 === 3) {
        eleven[1] = eleven[1] + 1;
    } else if ( result2 === 4) {
        eleven[2] = eleven[2] + 1;
    } else if ( result2 === 5) {
        eleven[3] = eleven[3] + 1;
    } else if ( result2 === 6) {
        eleven[4] = eleven[4] + 1;
    } else if ( result2 === 7) {
        eleven[5] = eleven[5] + 1;
    } else if ( result2 === 8) {
        eleven[6] = eleven[6] + 1;
    } else if ( result2 === 9) {
        eleven[7] = eleven[7] + 1;
    } else if ( result2 === 10) {
        eleven[8] = eleven[8] + 1;
    } else if( result2 === 11) {
        eleven[9] = eleven[9] + 1;
      } else {
        eleven[10] = eleven[10] + 1;
        }
    }
    return eleven;
}
    somando()

 
    // criar 11 barras com os resultados das 1000 jogadas de dados
function passando(){
    for  (let i=0; i<eleven.length; i++){
        const newDiv = document.createElement("div");
        const lista = document.createElement("p");
        lista.className = "meuParagrafo";
        const texto = document.createTextNode([i + 2] + ": " + eleven[i]);
        lista.appendChild(texto);
        const destinoFinal = document.getElementById("container");
        destinoFinal.appendChild(newDiv);
        destinoFinal.appendChild(texto);

        const newElement = document.createElement("div");
        newElement.className = "minhaBarra";
        newElement.style.width = eleven[i] + "px";
        const newText = document.createTextNode(eleven[i]);
        newElement.appendChild(newText);
        const destination = document.getElementById("container1");
        destination.appendChild(newElement);
        
        
}
}
passando()
