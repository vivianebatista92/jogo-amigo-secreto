let listaDeNomes = [];

const inserirNomes=() => {
    let nome = document.getElementById('amigo').value;
    if(nome === '') {
        window.alert('Insira o nome do amigo, por favor!');
        return;  
    } 
    
    if(nome.length < 3) {
        window.alert('O nome do amigo deve ter no mínimo 3 caracteres');
        return false;
    } 
    
    if(listaDeNomes.includes(nome)){
        window.alert('Esse amigo já foi adicionado!');
        return false;
     
    } else {
        listaDeNomes.push(nome);
    }
    listarNomes();
    limparCampo();
    limparSorteado();
    
}

function listarNomes() {
    let listaDeExibicao = document.getElementById('listaAmigos');
    let tagItem
    for(let I = 0; I < listaDeNomes.length; I++){
        tagItem = document.createElement('li');
        tagItem.innerHTML = listaDeNomes[I];

    }
listaDeExibicao.appendChild(tagItem);
}

function limparCampo() {
    nome = document.getElementById('amigo');
    nome.value = '';
}

function sortearAmigo() {
    let sorteio = document.getElementById('resultado');
    let amigoSorteado = listaDeNomes[Math.floor(Math.random() * listaDeNomes.length)];
    let tagSorteio = document.createElement('div');
    tagSorteio.innerHTML = `Parabéns, o sorteado foi ${amigoSorteado}`;
    sorteio.appendChild(tagSorteio);
    limparListaDeNomes();
    
}

function limparSorteado(){
    sorteio = document.getElementById('resultado');
    sorteio.innerText = '';
}

function limparListaDeNomes(){
    let listaDeExibicao = document.getElementById('listaAmigos');
    listaDeNomes = [];
    listaDeExibicao.innerText= '';
}