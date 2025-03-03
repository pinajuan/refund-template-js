// Seleciona os elementos do formulário
const form = document.querySelector("form")
const amount = document.getElementById("amount")
const expense = document.getElementById("expense")
const category = document.getElementById("category")

// Captura o evento de input para formatar o valor
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

// Captura o evento de submit do form para obter os valores (usando objeto)
form.onsubmit = (event) => {

    // Previne o comportamento de reload
    event.preventDefault()

    const newExpense = {
        id: new Date().getTime(),
        expense: expense.value,
        category_id: category.value,
        category_name: category.options[category.selectedIndex].text,
        amount: amount.value,
        created_at: new Date(),
    }

    expenseAdd(newExpense)

}

function expenseAdd(newExpense) {
    try { 
        // Cria o elemento para add na lista
        const expenseItem = document.createElement("li")
        expenseItem.classList.add("expense")
                
    } catch (error) {
        alert("Não foi possível atualizar a lista de despesas!")
        console.log(error)
    }
}