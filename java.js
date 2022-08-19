document.addEventListener('DOMContentLoaded', inseresumário)

function inseresumário() {
    const ol = document.createElement('ol')
    ol.id = 'sumario'
    document.body.prepend(ol)
    const conth2 = document.querySelectorAll('h2')
    
    for (let i = 0; i < contH2.length; i++) {
    
        const elementos = f_criarLista(`#h2${i + 1}`, contH2[i].textContent)
        listaMae.appendChild(elementos)
        mudarH2(contH2[i], i + 1)
    }    
}
