let lista=localStorage.getItem('mylista') ? JSON.parse(localStorage.getItem('mylista'))  : []
console.log('lista=',lista)

const delIcon="<i class='fa-solid fa-x text-danger fa-2x'  onclick='delItem(this)' role='button'></i>"

render(lista)   

function add(){
    let lista_item=document.querySelector('#lista_item').value
    console.log(lista_item)
    lista.push(lista_item)
    localStorage['mylista']=JSON.stringify(lista)
    render(lista)
    console.log(lista)
}

function del(){
    lista=[]
    localStorage['mylista']=JSON.stringify(lista)
    localStorage.removeItem('mylista')
    render(lista)
}

function render(arr){
    let str=''
    for(let item of arr){
        str+=`<li><span>${item.nev} </span>${delIcon}</li>`
    }
    document.querySelector('ul').innerHTML=str
    document.querySelector('#lista_item').value=''
}

function delItem(obj){
    console.log(obj.previousElementSibling.textContent)
    let torlendo=obj.previousElementSibling.textContent
    lista=lista.filter(b=>b!=torlendo)
    localStorage['mylista']=JSON.stringify(lista)
    render(lista)

}
adatok=[
    {id:1,
    nev:"alma",
    mennyiseg:"2kg"},
    {id:2,
    nev:"rozskenyér",
    mennyiseg:"negyed"},
    {id:3,
    nev:"joghurt",
    mennyiseg:"2 darab"},
    {id:4,
    nev:"sajt",
    mennyiseg:"300g"},
]

render(adatok)

let maxid = adatok.reduce((m,obj)=>obj.id>m? obj.id:m,0)
console.log(maxid)

    