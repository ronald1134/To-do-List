const localStorageKey = 'to-do-list-dlanor'

function validacaoExistTask(){
    let valor = JSON.parse(localStorage.getItem(localStorageKey)|| "[]")
    let inputValue = document.getElementById("new-task").value
    let exists = valor.find(x => x.lista === inputValue)
    return exists ? true : false
}

function newTask(){
    let input = document.getElementById("new-task")
    
    if(!input.value){
        alert('nenhuma task adicionada! revise por favor')
    }else if (validacaoExistTask()){
        alert('Já existe essa task!')
    }
    else{
        let valor = JSON.parse(localStorage.getItem(localStorageKey)|| "[]")
        valor.push({
            lista: input.value
        })
        localStorage.setItem(localStorageKey, JSON.stringify(valor))
        MostrarValore()
        input.value = ''
    }
}

function MostrarValore(){
    let valor = JSON.parse(localStorage.getItem(localStorageKey)|| "[]");
    let list = document.getElementById('to_do_list');
    list.innerHTML = "";

    valor.forEach(task => {
        let taskEncoded = encodeURIComponent(task.lista);
        let li = document.createElement('li');
        
        li.innerHTML = `
            ${task.lista}
            <button class="btn-ok" onclick="apagarItem('${taskEncoded}')">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0"/>
                </svg>
            </button>
        `;
        
        list.appendChild(li);
    });
}

function apagarItem(data){
    let taskDecoded = decodeURIComponent(data)
    let valor = JSON.parse(localStorage.getItem(localStorageKey) || "[]")
    let index = valor.findIndex(item => item.lista === taskDecoded)
    
    if(index !== -1){
        valor.splice(index, 1)
        localStorage.setItem(localStorageKey, JSON.stringify(valor))
        MostrarValore()
    }
}

MostrarValore()