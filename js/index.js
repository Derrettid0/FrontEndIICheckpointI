    // getFormData = (selector) => Object.fromEntries(new FormData(document.querySelector(selector)))
    const foto = document.getElementById('urlFoto')
    const velocidade = document.getElementById("Km/h")
    const potencia = document.getElementById("HP")
    const rpm = document.getElementById("RPM")
    const cilindradas = document.getElementById("Cilindradas")
    const cilindros = document.getElementById("Cilindros")
    const peso = document.getElementById("Peso")

    // Cria array com elementos HTML para extração do valor
    const array_html_elements = [
        foto,
        velocidade,
        potencia,
        rpm,
        cilindradas,
        cilindros,
        peso,
    ]

    let array_data_values = []

    // Habilita botão submit somente se todos campo estiverem preenchidos
    array_html_elements.forEach(element => element.addEventListener("keyup", function () {

        // Cria array com os valores das tags de input
        array_data_values = array_html_elements.map(e => { return e.value })

        // if (array_data_values.some((element) => /^\d+$/.test(element) != true)) {
        //     alert("Digite apenas números")
        // }

        if (array_data_values.every((element) => element != "")) {
            const btn = document.getElementById("btn")
            btn.removeAttribute("disabled")
        } else {
            btn.setAttribute("disabled", true)
        }

    }));


    let submit = document.getElementById("btn").addEventListener("click", function () {
        // Cria array com os valores das tags de input
        array_data_values = array_html_elements.map(e => { return e.value })

        console.log(array_data_values);

    });

let sectionConteudos = document.querySelector('.criados')

const url = array_data_values

function pegarDados(i) {
    fetch(url)
      .then( response => response.json() )
      .then( dados => {
          if(dados.erro) {
              console.log("Erro ao acessar o JSON")
              return
          }
          atribuirDados(dados, i)
      })};

function atribuirDados(dados, i){
foto.setAttribute('src', dados.array_data_values[i].urlFoto)
velocidade.textContent = dados.array_data_values[i].velocidade
potencia.textContent = dados.array_data_values[i].potencia
rpm.textContent = dados.array_data_values[i].rpm
cilindradas = dados.array_data_values[i].cilindradas
cilindros = dados.array_data_values[i].cilindros
peso = dados.array_data_values[i].peso

}

function desenharCarta(id){
    let carta = document.createElement('card')
    carta.setAttribute('class', 'card')
    carta.setAttribute('id', 'card')
    sectionConteudos.appendChild(carta)

    let titulo = document.createElement ('h1')
    titulo.setAttribute('id', 'card__title')
    carta.appendChild(titulo)
    
    let imagem = document.createElement('img')
    imagem.setAttribute('src', 'https://picsum.photos/150/100')
    carta.appendChild(imagem)

    let modelo = document.createElement('h2')
    modelo.setAttribute('id', 'card__bike-name')
    carta.appendChild(modelo)

    let container = document.createElement('div')
    container.setAttribute('id', 'criado')
    carta.appendChild(container)

    let label = document.createElement ('div')
    label.setAttribute('id', 'card__feature-label')
    container.appendChild(label)

    let lbl = document.createElement ('label')
    lbl.setAttribute('for', 'Km/h')
    lbl.textContent = 'Km/h'
    label.appendChild(lbl)

    let lbl1 = document.createElement ('label')
    lbl1.setAttribute('for', 'HP')
    lbl1.textContent = 'HP'
    label.appendChild(lbl1)

    let lbl2 = document.createElement ('label')
    lbl2.setAttribute('for', 'RPM')
    lbl2.textContent = 'RPM'
    label.appendChild(lbl2)

    let lbl3 = document.createElement ('label')
    lbl3.setAttribute('for', 'Cilindradas')
    lbl3.textContent = 'Cilindradas'
    label.appendChild(lbl3)

    let lbl4 = document.createElement ('label')
    lbl4.setAttribute('for', 'Cilindros')
    lbl4.textContent = 'Cilindros'
    label.appendChild(lbl4)

    let lbl5 = document.createElement ('label')
    lbl5.setAttribute('for', 'Peso')
    lbl5.textContent = 'Peso'
    label.appendChild(lbl5)

    let cardValue = document.createElement('div')
    cardValue.setAttribute('id','card__feature-value')
    container.appendChild(cardValue)

    let speed = document.createElement('p')
    speed.setAttribute('id','Km/h')
    speed.setAttribute('class', 'card-value')
    cardValue.appendChild(speed)
    
    let horsePower = document.createElement('p')
    horsePower.setAttribute('id','HP')
    horsePower.setAttribute('class', 'card-value')
    cardValue.appendChild(horsePower)

    let rotacoes = document.createElement('p')
    rotacoes.setAttribute('id','RPM')
    rotacoes.setAttribute('class', 'card-value')
    cardValue.appendChild(rotacoes)

    let cc = document.createElement('p')
    cc.setAttribute('id','Cilindradas')
    cc.setAttribute('class', 'card-value')
    cardValue.appendChild(cc)

    let Cilind = document.createElement('p')
    Cilind.setAttribute('id','Km/h')
    Cilind.setAttribute('class', 'card-value')
    cardValue.appendChild(Cilind)

    let massa = document.createElement('p')
    massa.setAttribute('id','Km/h')
    massa.setAttribute('class', 'card-value')
    cardValue.appendChild(massa)
    
    pegarDados(i)
}   