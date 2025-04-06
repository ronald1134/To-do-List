const localStorageKey = 'to-do-list-dlanor'

function newTask (){
    let input = document.getElementById("new-task")
    //validação
    if(!input.value){
        alert('nenhuma task adicionada! revise por favor')
    }else{
        let valor = JSON.parse(localStorage.getItem(localStorageKey)|| "[]")
        valor.push({
            lista: input.value
        })
        localStorage.setItem(localStorageKey, JSON.stringify(valor))
        MostrarValore()
    }
}

function MostrarValore (){
    let valor = JSON.parse(localStorage.getItem(localStorageKey)|| "[]")
    let list = document.getElementById('to_do_list')
    list.innerHTML = ""

    for(let i = 0; i < valor.length; i++){
        list.innerHTML += `<li>${valor[i] ['lista']}<button id='btn-ok' onclick = 'apagar'> Ok </button></li>`
    }
}
MostrarValore()