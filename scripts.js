// Seleciona os elementos do formulário
const amount = document.getElementById("amount")

// Caputa o evento de input para formatar o valor
amount.oninput = () => {
    let value = amount.value.replace(/\D/g, "")
    value = Number(value)/100
    amount.value = formatCurrencyBRL(value)
}

// Formata o valor no padrão BRL (Real brasileiro)
function formatCurrencyBRL(value) {
    value = value.toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL",
    })
    return value
}