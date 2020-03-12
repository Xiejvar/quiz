
const pregunta1 = {
    titulo : "Como llaman a Gandalf en el Oeste?",
    respuestas : [
        "Glorfindel",
        "Aerendil",
        "Mithrandir",
        "Maegir"
    ]
}


const pregunta2 = {
    titulo : "Quien gano torneo de Mortal Kombat?",
    respuestas : [
        "Raiden",
        "Sonia Blade",
        "Liu-Kang",
        "Johny Cage"
    ]
}


const pregunta3 = {
    titulo : "En que Resident Evil ocurre la destruccion de Racoon City",
    respuestas : [
        "RE1",
        "RE3",
        "RE4",
        "RE2"
    ]
}


const pregunta4 = {
    titulo : "Cuantas colas tiene el bijuu que hay dentro de Naruto",
    respuestas : [
        "9 colas",
        "4 colas",
        "7 colas",
        "3 colas"
    ]
}


const pregunta5 = {
    titulo : "En que saga ocurrio la primera fusion entre goku y vegeta?",
    respuestas : [
        "Saga de Cell",
        "Saga de los Sayan",
        "Saga de Freezer",
        "Saga de Bu"
    ]
}
const cuerpo = document.getElementById("cuerpo");

cuerpo.innerHTML = `
<section>
<header>
    <h2 class="letra espacio">Welcome to the</h2>
    <h1 class="letra sombra espacio">QUIZ!!!</h1>
</header>
</section>
<section class="respuesta">
<article>
    <h3>${pregunta1.titulo}</h3>
</article>
<article class="columna">
    <label for="resp1pre1">${pregunta1.respuestas[0]}</label>
    <input type="radio" name="resppre1" id="resp1pre1" class="esconder">
    <label for="resp2pre1">${pregunta1.respuestas[1]}</label>
    <input type="radio" name="resppre1" id="resp2pre1" class="esconder">
    <label for="resp3pre1">${pregunta1.respuestas[2]}</label>
    <input type="radio" name="resppre1" id="resp3pre1" class="esconder">
    <label for="resp4pre1">${pregunta1.respuestas[3]}</label>
    <input type="radio" name="resppre1" id="resp4pre1" class="esconder">
</article>
</section>
<section class="respuesta">
<article>
    <h3>${pregunta2.titulo}<h3>
</article>
<article class="columna">
    <label for="resp1pre2">${pregunta2.respuestas[0]}</label>
    <input type="radio" name="resppre2" id="resp1pre2" class="esconder">
    <label for="resp2pre2">${pregunta2.respuestas[1]}</label>
    <input type="radio" name="resppre2" id="resp2pre2" class="esconder">
    <label for="resp3pre2">${pregunta2.respuestas[2]}</label>
    <input type="radio" name="resppre2" id="resp3pre2" class="esconder">
    <label for="resp4pre2">${pregunta2.respuestas[3]}</label>
    <input type="radio" name="resppre2" id="resp4pre2" class="esconder">
</article>
</section>
<section class="respuesta">
<article>
    <h3>${pregunta3.titulo}</h3>
</article>
<article class="columna">
    <label for="resp1pre3">${pregunta3.respuestas[0]}</label>
    <input type="radio" name="resppre3" id="resp1pre3" class="esconder">
    <label for="resp2pre3">${pregunta3.respuestas[1]}</label>
    <input type="radio" name="resppre3" id="resp2pre3" class="esconder">
    <label for="resp3pre3">${pregunta3.respuestas[2]}</label>
    <input type="radio" name="resppre3" id="resp3pre3" class="esconder">
    <label for="resp4pre3">${pregunta3.respuestas[3]}</label>
    <input type="radio" name="resppre3" id="resp4pre3" class="esconder">
</article>
</section>
<section class="respuesta">
<article>
    <h3>${pregunta4.titulo}</h3>
</article>
<article class="columna">
    <label for="resp1pre4">${pregunta4.respuestas[0]}</label>
    <input type="radio" name="resppre4" id="resp1pre4" class="esconder">
    <label for="resp2pre4">${pregunta4.respuestas[1]}</label>
    <input type="radio" name="resppre4" id="resp2pre4" class="esconder">
    <label for="resp3pre4">${pregunta4.respuestas[2]}</label>
    <input type="radio" name="resppre4" id="resp3pre4" class="esconder">
    <label for="resp4pre4">${pregunta4.respuestas[3]}</label>
    <input type="radio" name="resppre4" id="resp4pre4" class="esconder">
</article>
</section>
<section class="respuesta">
<article>
    <h3>${pregunta5.titulo}</h3>
</article>
<article class="columna">
    <label for="resp1pre5">${pregunta5.respuestas[0]}</label>
    <input type="radio" name="resp1pre5" id="resp1pre5" class="esconder">
    <label for="resp2pre5">${pregunta5.respuestas[1]}</label>
    <input type="radio" name="resp2pre5" id="resp2pre5" class="esconder">
    <label for="resp3pre5">${pregunta5.respuestas[2]}</label>
    <input type="radio" name="resp3pre5" id="resp3pre5" class="esconder">
    <label for="resp4pre5">${pregunta5.respuestas[3]}</label>
    <input type="radio" name="resp4pre5" id="resp4pre5" class="esconder">
</article>
</section>
`;

