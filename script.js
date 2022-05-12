
var numb = window.document.getElementById("num")
var res = window.document.getElementById("res")
var lista = window.document.querySelector("select#list")
var newarray = []


function Isnum(n){
   if (Number(n) >= 1 && Number(n) <= 100) {
       return true
   }else {
       return false
   }
}

function inlist(n , l){
    if(l.indexOf(Number(n)) == -1){
        return true
    } else{
        return false
    }
}

function add(){
    if(Isnum(numb.value) && inlist(numb.value, newarray)){
        newarray.push(Number(numb.value))
        let item = document.createElement("option")
        item.text = `Valor ${numb.value} adicionado`
        lista.appendChild(item)
        res.innerHTML = ``
    }else{
        window.alert(`valor inválido ou já encontrado na lista`)
    }
    numb.value = ``
    numb.focus()
    
}

function finish() {
    if(newarray.length == 0){
        window.alert("nao")
    }else{
        let maior = newarray[0]
        let menor = newarray[0]
        let soma = 0
        let media = 0
        for (let pos = 0;pos < newarray.length;pos++){
            soma += newarray[pos] 
            media = soma/newarray.length
            if(newarray[pos] > maior){
                maior = newarray[pos]}
            if(newarray[pos] < menor){
                menor = newarray[pos]}
            }

        res.innerHTML = ``
        res.innerHTML = `<p>${newarray.length} números cadastrados</p>`
        res.innerHTML += `<p>O maior valor foi ${maior}</p>`
        res.innerHTML += `<p>O menor valor foi ${menor}</p>`
        res.innerHTML += `<p>A soma de todos os valores é igual a ${soma}</p>`
        res.innerHTML += `<p>A média dos valores é igual a ${media}</p>`
    }
}