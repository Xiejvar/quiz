
const pregunta1 = {
    titulo: "Como llaman a Gandalf en el Oeste?",
    respuestas: [{
            label: "Glorfindel",
            id: "Glorfindel",
            name: "pre1",
            value: "Glorfindel"
        },
        {
            label: "Aerendil",
            id: "Aerendil",
            name: "pre1",
            value: "Aerendil"
        },
        {
            label: "Mithrandir",
            id: "Mithrandir",
            name: "pre1",
            value: "Mithrandir"
        },
        {
            label: "Maegir",
            id: "Maegir",
            name: "pre1",
            value: "Maegir"
        }
    ]
}


const pregunta2 = {
    titulo: "Quien gano torneo de Mortal Kombat?",
    respuestas: [{
            label: "Raiden",
            id: "Raiden",
            name: "pre2",
            value: "Raiden"
        },
        {
            label: "Sonia Blade",
            id: "SoniaBlade",
            name: "pre2",
            value: "SoniaBlade"
        },
        {
            label: "Liu-Kang",
            id: "LiuKang",
            name: "pre2",
            value: "LiuKang"
        },
        {
            label: "Johny Cage",
            id: "JohnyCage",
            name: "pre2",
            value: "JohnyCage"
        }
    ]
}


const pregunta3 = {
    titulo: "En que Resident Evil ocurre la destruccion de Racoon City",
    respuestas: [{
            label: "RE1",
            id: "RE1",
            name: "pre3",
            value: "RE1"
        },
        {
            label: "RE3",
            id: "RE3",
            name: "pre3",
            value: "RE3"
        },
        {
            label: "RE4",
            id: "RE4",
            name: "pre3",
            value: "RE4"
        },
        {
            label: "RE2",
            id: "RE2",
            name: "pre3",
            value: "RE2"
        }
    ]
}


const pregunta4 = {
    titulo: "Cuantas colas tiene el bijuu que hay dentro de Naruto",
    respuestas: [{
            label: "9 colas",
            id: "9colas",
            name: "pre4",
            value: "9colas"
        },
        {
            label: "4 colas",
            id: "4colas",
            name: "pre4",
            value: "4colas"
        },
        {
            label: "7 colas",
            id: "7colas",
            name: "pre4",
            value: "7colas"
        },
        {
            label: "3 colas",
            id: "3colas",
            name: "pre4",
            value: "3colas"
        }
    ]
}


const pregunta5 = {
    titulo: "En que saga ocurrio la primera fusion entre goku y vegeta?",
    respuestas: [{
            label: "Saga de Cell",
            id: "SagaCell",
            name: "pre5",
            value: "SagaCell"
        },
        {
            label: "Saga de los sayan",
            id: "SagaSayan",
            name: "pre5",
            value: "SagaSayan"
        },
        {
            label: "Saga de Freezer",
            id: "SagaFreezer",
            name: "pre5",
            value: "SagaFreezer"
        },
        {
            label: "Saga de Bu",
            id: "SagaBu",
            name: "pre5",
            value: "SagaBu"
        }
    ]
}


const imprimeTitulo = (titulo) => {
    return `<p>${titulo}</p>`;
}




const imprimePregunta = (pregunta) => {
    const {
        titulo,
        respuestas
    } = pregunta;
    const iterar = respuestas.map(imprimeRespuesta);
    const juntar = iterar.join("");
    const titulos = imprimeTitulo(titulo);
    return titulos + juntar;
}



const imprimeRespuesta = (respuesta) => {
    const {
        id,
        label,
        name,
        value
    } = respuesta
    return `
   <article>
    <label for="${id}">${label}</label>
    <input type="radio" id="${id}" name="${name}" value="${value}">
  </article>`;
}







const preguntas = [pregunta1, pregunta2, pregunta3, pregunta4, pregunta5];

const preguntaImpresa = preguntas.map(imprimePregunta).join('')



const imprimeRespuestas = (event) => {
    event.preventDefault()

    console.log($form.elements.pre1.value)
    console.log($form.elements.pre2.value)
    console.log($form.elements.pre3.value)
    console.log($form.elements.pre4.value)
    console.log($form.elements.pre5.value)
}
const botonazo = () => `<button>Enviar</button>`;

const $form = document.getElementsByTagName('form')[0];
const boton = botonazo();

$form.innerHTML = preguntaImpresa + boton;
$form.addEventListener('submit', imprimeRespuestas);