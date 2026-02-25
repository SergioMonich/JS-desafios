/**
--> AUTOR...: SERGIO MONICH
--> DATA....: 19/02/2026
--> OBJETIVO: EXERCITAR OS CONCEITOS DE PROGRAMAÇÃO COM TECNOLOGIA JAVASCRIPT
--> GITHUB..: https://github.com/SergioMonich/
--> LINKEDIN: https://www.linkedin.com/in/sergiomonich/
*/


// recuperando itens dentro das divs
function alterarStatus(id) {

    let jogoescolhido = document.getElementById(`game-${id}`);
    let imagem = jogoescolhido.querySelector('.dashboard__item__img');
    let nomejogo = jogoescolhido.querySelector('.dashboard__item__name');
    let botao = jogoescolhido.querySelector('.dashboard__item__button');

    // testando se os itens estão sendo recuperados corretamente 
    // console.log(nomejogo.textContent);

    // LÓGICA PARA ALTERAR O STATUS DO JOGO
    if (imagem.classList.contains('dashboard__item__img--rented')) {

        imagem.classList.remove('dashboard__item__img--rented');
        botao.textContent = 'Alugar';
        botao.style.backgroundColor = '#1875E8';
        // ou botao.classlist.remove('dashboard__item__button--return');

    } else {

        imagem.classList.add('dashboard__item__img--rented');
        botao.textContent = 'Devolver';
        botao.style.backgroundColor = '#01080E';
        
    }

}
