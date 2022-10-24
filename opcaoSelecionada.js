export function opcaoSelecionada(idSelecionar) {
    let elementoDOM = document.getElementById(`${idSelecionar}`)
    return elementoDOM.options[elementoDOM.selectedIndex].value
}