import { adicionaEvento } from './adicionaEvento.js'
import { opcaoSelecionada } from './opcaoSelecionada.js'
import { entradaBusca } from './entradaBusca.js'
import { retornaListaAPI } from './retornaListaAPI.js'

const ul = document.querySelector('ul')

adicionaEvento("botaoBuscar","click",getApiGitHub)
adicionaEvento("selecionarAtributo","change",getApiGitHub)
adicionaEvento("ordenarLista","change",getApiGitHub)

function getApiGitHub(){

    while (ul.firstChild) {
    ul.removeChild(ul.firstChild);
    }
        
    let valueAtributo = opcaoSelecionada('selecionarAtributo')

    let valueOrdenar = opcaoSelecionada('ordenarLista')

    let buscaRepositorio = entradaBusca('buscaRepositorio')

    retornaListaAPI(valueAtributo,valueOrdenar,buscaRepositorio)

}

getApiGitHub()