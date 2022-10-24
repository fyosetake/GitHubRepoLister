export function adicionaEvento(elemento,evento,funcao) {
    let el = document.getElementById(elemento)
    el.addEventListener(`${evento}`, funcao);
}