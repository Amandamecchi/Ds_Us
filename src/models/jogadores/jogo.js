class jogo {
    constructor (nome,mapa,quantidadeJogadores){
        this.nome = nome;
        this.mapa = mapa;
        this.quantidadeJogadores = quantidadeJogadores;
    }
}
class desenvolvedor {
    constructor (nome,equipeNome, status, caracteristicas, culpado, idDesenvolvedor){
        this.nome = nome;
        this.equipeNome = equipeNome;
        this.status = status;
        this.caracteristicas = caracteristicas;
        this.culpado = culpado;
        this.idDesenvolvedor = idDesenvolvedor;
    }
}
class sabotador {
    constructor (nomeSabotador,nomeEquipe,quantidadeJogadores, idSabotador){
        this.nome = nomeSabotador;
        this.nomeEquipe = nomeEquipe;
        this.quantidadeJogadores = quantidadeJogadores;
        this.idSabotador = idSabotador;
    }
}