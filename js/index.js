// getFormData = (selector) => Object.fromEntries(new FormData(document.querySelector(selector)))
const imagem = document.getElementById('card__image')
const bike = document.getElementById('bike-name')
const velocidade = document.getElementById("Km/h")
const potencia = document.getElementById("HP")
const rpm = document.getElementById("RPM")
const cilindradas = document.getElementById("Cilindradas")
const cilindros = document.getElementById("Cilindros")
const peso = document.getElementById("Peso")

// Cria array com elementos HTML para extração do valor
const array_html_elements = [
    imagem,
    bike,
    velocidade,
    potencia,
    rpm,
    cilindradas,
    cilindros,
    peso,
]

// Cria array para armazenar os valores dos inputs

// Habilita botão submit somente se todos os campos estiverem preenchidos
array_html_elements.forEach(element => element.addEventListener("keyup", function () {
    
    // Cria array com os valores das tags de input
    array_data_values = array_html_elements.map(e => { return e.value })

    // CRIAR REGRA PARA INPUT COM LETRAS
    /* if (array_data_values.some((element) => /^\d+$/.test(element) != true)) {
        alert("Digite apenas números")
    }*/
    
    if (array_data_values.every((element) => element != "")) {
        const btn = document.getElementById("btn")
        btn.removeAttribute("disabled")
    } else {
        btn.setAttribute("disabled", true)
    }
}));

let array_data_values = []

const section = document.getElementById('section')

document.getElementById("btn").addEventListener("click", function () {
// Cria array com os valores do input para popular o novo card.
array_data_values = array_html_elements.map(e => { return e.value })
// Faz o append do HTML do card criado.
section.innerHTML += `<card id="card">
                        <div class="card__header">
                            <div class="card__cod">C3</div>
                            <div class="card__title">Motos Custom</div>
                        </div>
                        <img id="card__image" src="${array_data_values[0]}" alt="">
                        <h2 id="card__bike-name">${array_data_values[1]}</h2>
                            <div id="card__data">
                                <div id="card__feature-label">
                                    <label for="Km/h">Km/h</label>
                                    <label for="HP">HP</label>
                                    <label for="RPM">RPM</label>
                                    <label for="Cilindradas">Cilindradas</label>
                                    <label for="Cilindros">Cilindros</label>
                                    <label for="Peso">Peso</label>
                                </div>
                                <div id="card_copy__feature-value">
                                    <small id="Km/h" class="card-value">${array_data_values[2]}</small>
                                    <small id="HP" class="card-value">${array_data_values[3]}</small>
                                    <small id="RPM" class="card-value">${array_data_values[4]}</small>
                                    <small id="Cilindradas" class="card-value">${array_data_values[5]}</small>
                                    <small id="Cilindros" class="card-value">${array_data_values[6]}</small>
                                    <small id="Peso" class="card-value">${array_data_values[7]}</small>
                                </div>
                            </div>
                    </card>`

// Apaga os valores do card após o submit
array_html_elements.forEach(e => e.value = '')
});

