    // getFormData = (selector) => Object.fromEntries(new FormData(document.querySelector(selector)))
    const velocidade = document.getElementById("Km/h")
    const potencia = document.getElementById("HP")
    const rpm = document.getElementById("RPM")
    const cilindradas = document.getElementById("Cilindradas")
    const cilindros = document.getElementById("Cilindros")
    const peso = document.getElementById("Peso")

    // Cria array com elementos HTML para extração do valor
    const array_html_elements = [
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