let listaDeNomes = [];

const inserirNomes=() => {
    let nome = document.getElementById('amigo').value;
    if(nome === '') {
        alert('Insira o nome do amigo, por favor!');
        return;  
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
    let tagSorteio = document.createElement('li');
    tagSorteio.innerHTML = amigoSorteado;
    sorteio.appendChild(tagSorteio);
}

function limparSorteado(){
    sorteio = document.getElementById('resultado');
    sorteio.innerTEXT = '';
}