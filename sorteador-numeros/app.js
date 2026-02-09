/**
--> AUTOR...: SERGIO MONICH
--> DATA....: 09/02/2026
--> OBJETIVO: EXERCITAR OS CONCEITOS DE PROGRAMAÇÃO COM TECNOLOGIA JAVASCRIPT
--> GITHUB..: https://github.com/SergioMonich/
--> LINKEDIN: https://www.linkedin.com/in/sergiomonich/
*/

function sortear() {

    //declarando variáveis
    let quantidade = parseInt(document.getElementById("quantidade").value);
    let doNumero = parseInt(document.getElementById("doNumero").value);
    let ateNumero = parseInt(document.getElementById("ateNumero").value);
    let numero;
    let numerosSortedos = [];
    let retornoResultado = document.getElementById("resultado");

    //loop de repetição
    for (let i = 0; i < quantidade; i++) {

        numero = numeroAleatorio(doNumero, ateNumero);

        if (numerosSortedos.includes(numero)) { //validação da lista para não repetir números

            return numeroAleatorio();

        } else {

            numerosSortedos.push(numero);

        }

        /* Outra forma de fazer a validação da lista seria:
        numero = numeroAleatorio(doNumero, ateNumero);

        while (numerosSorteados.includes(numero)) {

            return numeroAleatorio();

        }

        numerosSortedos.push(numero);
         */
        
    }

    retornoResultado.innerHTML = `<label class="texto__paragrafo">Números sorteados: ${numerosSortedos}</label>`;
    statusBotao();
   
    //monitoramento
    console.log(quantidade);
    console.log(doNumero);
    console.log(ateNumero);
    console.log(numerosSortedos)

}

function numeroAleatorio(min, max) {

    return Math.floor(Math.random() * (max - min + 1)) + min; //essa função irá sortear os números dentro do intervalo inclusive
    
}

function statusBotao() {

    let botao = document.getElementById("btn-reiniciar");

    if (botao.classList.contains("container__botao-desabilitado")) {

        botao.classList.remove("container__botao-desabilitado");
        botao.classList.add("container__botao");

    } else {

        botao.classList.add("container__botao-desabilitado");
        botao.classList.remove("container__botao");

    }

}

function reiniciar() {

    document.getElementById("quantidade").value = "";
    document.getElementById("doNumero").value = "";
    document.getElementById("ateNumero").value = "";
    document.getElementById("resultado").innerHTML = '<label class="texto__paragrafo">Números sorteados:  nenhum até agora</label>';

    statusBotao();

}