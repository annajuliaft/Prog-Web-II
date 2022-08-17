const botao = document.createElement('mybtn');
botao.innerHTML = `
    <div id='center'><button onclick='init()' id='bota'>COMEÇAR FORMULÁRIO</button></div>
`
const msg = document.createElement('h1');

const form = document.createElement('formulario');
form.innerHTML = `
    <h1>Opiniões sobre os filmes</h1>
     <form id="formulario">
     <br>
        <fieldset class="grupo">
            <div class="input">
            <center>
                <label>Nome</label>
                <input type="text" name="nome" id="nome" required>
                <label>Idade</label>
                <input type="text" name="idade" id="idade" required>
            </center> 
            </div>
        </fieldset> 
        <div class="input">
           <h2 style="color : #AA4465">Filme preferido do site:</h2> 
           <select id="Filme preferido do site" required>
                <option selected disabled value="">Selecione</option>
                <option>Homem-Aranha:Sem volta pra casa</option>
                <option>Ainda estou aqui</option>
                <option>A escolha perfeita 3</option>
                <option>Mulher-Maravilha</option>
            </select>
        </div>
        <br> 
        <fieldset class="grupo">
        <div id="check">
            <h2 style="color : #AA4465">Selecione os filmes que já assistiu</h2>
            <br>
                <input type="checkbox" id="filme1" name="filme1">
                <label for="filme1"> Homem-Aranha:Sem volta pra casa</label>
                <input type="checkbox" id="filme2" name="filme2">
                <label for="filme2"> Ainda estou aqui</label>
                <input type="checkbox" id="filme3" name="filme3">
                <label for="filme3"> A escolha perfeita 3</label>
                <input type="checkbox" id="filme4" name="filme4">
                <label for="filme4"> Mulher-Maravilha</label>
        </div>
        </fieldset>
        <br>
        <div class="campo">
          <center>
            <h2 style="color : #AA4465">Você já assistiu algum desses filmes?</h2>
           </center>  
           <label>
               <input type="radio" name="devweb" value="todos">Sim, todos
            </label>
            <label>
               <input type="radio" name="devweb" value="3 filmes">Sim, assisti 3 deles
            </label>
            <label>
               <input type="radio" name="devweb" value="2 filmes">Sim, assisti 2 deles
            </label>
            <label>
               <input type="radio" name="devweb" value="1 filmes">Sim, assisti 1 deles
            </label>
            <label>
               <input type="radio" name="devweb" value="nenhum">Não assisti nenhum
            </label>
        </div>
        <div class="campo">
         <br>
          <center>
            <h2 style="color : #AA4465">Deixe aqui sua opinião sobre algum filme</h2>
            <textarea rows="6" style="width: 26em" id="experiencia" name="experiencia"></textarea>
          </center>
        </div>
        <button class="botao" type="submit" onsubmit="">Enviar</button> 
    </form>
`
document.body.appendChild(botao);
const title = document.getElementById('title');
title.innerText = 'COMEÇAR FORMULÁRIO'

function init() {
    document.body.removeChild(botao);
    formulario();
};

function formulario() {
    title.innerText = 'FORMULÁRIO'
    document.body.appendChild(form);
    const send = document.getElementById('formulario');
    send.addEventListener('submit', sendbutton);
};

function sendbutton(event) {
    event.preventDefault();
    const nome = document.getElementById('nome').value;
    final(nome)
};

function final(nome) {
    title.innerText = 'AGRADECIMENTOS'
    msg.innerHTML = `<h1>Olá, ${nome}!\nMuito obrigado por responder ao formulário. Até a próxima!!<h1>`
    document.body.removeChild(form);
    document.body.appendChild(msg);}
