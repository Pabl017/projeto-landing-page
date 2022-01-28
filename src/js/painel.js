/*
    quando clicar na seta pra nós temos que
    esconder todas as imagens e mostrar a próxima imagem

        a imagem atual começa em 0 pq é a primeira imagem
        assim que for clicado no eu preciso adicionar mais 1 ao contador de imagens
        pra poder saber que agora eu vou mostrar a segunda imagem

        esconder todas as imagens
            pegar todas as imagens usando o DOM e remover a classe mostrar
        
        mostrar a próxima imagem
            pegar como imagens, descobrir qual é a próxima, e colocar uma classe
            mostrar
*/

const imagensPainel = document.querySelectorAll('.imagem-painel');
const setaAvancar = document.getElementById('btn-avancar');
const setaVoltar = document.getElementById('btn-voltar');
let imagemAtual = 0;

function esconderImagens() {
    imagensPainel.forEach(imagem => {
        imagem.classList.remove('mostrar')
    });
}

function mostrarImagem() {
    imagensPainel[imagemAtual].classList.add('mostrar');
}

/*
    quando clicar na seta pra nós temos que
    esconder todas as imagens e mostrar a próxima imagem
*/
//addEventListener = evento de clique

setaAvancar.addEventListener('click', function () {

    // testa se o contador da imagemAtual é igual ao total de imagem
    const totalDeImagens = imagensPainel.length - 1;
    if (imagemAtual === totalDeImagens) {
        console.log('não pode avançar mais')
        return;
    }
    /*
        a imagem atual começa em 0 pq é a primeira imagem
        assim que for clicado no eu preciso adicionar mais 1 ao contador de imagens pra poder saber que agora eu vou mostrar a segunda imagem
    */
    imagemAtual++;

    esconderImagens();

    /*
        esconder todas as imagens
            pegar todas as imagens usando o DOM e remover a classe mostrar
    */
    /*
        mostrar a próxima imagem
            pegar todas as imagens, descobrir qual é a próxima, e colocar a classe mostrar nela
    */
    mostrarImagem();
});
/*
    quando clicar na seta voltar temos que
    esconder todas as imagens e mostrar a imagem anterior
*/

setaVoltar.addEventListener('click', function () {

    if (imagemAtual === 0) {
        return;
    }

    imagemAtual--;

    /*
    esconder todas as imagens
        pegar todas as imagens usando o DOM e remover a classe mostrar
    */

    esconderImagens();

    /*
        mostrar a imagem anterior
            pegar como imagens, descobrir qual é a anterior, e colocar uma classe mostrar nela
    */
    mostrarImagem();
})